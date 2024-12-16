import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { SellPost, GoodsType } from "../../proto/sellPost_pb"; 
import { Post, PostType} from "../../proto/post_pb";
import { CreateSellPostRequest,ListPersonalPostsRequest,ListRequestType,ListSellPostsRequest} from "../../proto/forum_pb";
import { useNavigate } from 'react-router-dom';
import { changeImg, DeletePost, initPost} from "../../functions/post";
import "./sellPostList.css";
const client = new ForumClient("http://localhost:8080");

const SellList = () => {
    const SellPosts: SellPost[] = [];
    const[showCreate,setShowCreate] = useState(false);
    const[title,setTitle] = useState("");
    const [sellPosts, setSellPosts] = useState(SellPosts);
    const[content,setContent] = useState("");
    const[price,setPrice] = useState(0);
    const[strpirce,setStrPrice] = useState(""); 
    const [upbond,setUpbond]=useState(100000);
    const [GoodType,setGoodType]=useState("");
    const [Goodtype1,setGoodType1]=useState(GoodsType.OTHER);
    const [optGoodType,setOptGoodType]=useState("ALL"); 
    const [imgList,setImgList]=useState<string[]>([]);
    const [sold1,setSold1]=useState("on sale");
    const [sold,setSold]=useState(false);
    const [cantact,setContact]=useState("");    
    const [getPost,setGetPost]=useState(true);
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token')!);
    const uid=JSON.parse(localStorage.getItem('uid')!);
    const type=JSON.parse(localStorage.getItem('type')!);

    const GetType=(type:string)=>{
        switch(type){
            case "BOOK":
                return GoodsType.BOOK;
            case "COMPUTER":
                return GoodsType.COMPUTER;
            case "TICKET":
                return GoodsType.TICKET;
            case "DISPLAY":
                return GoodsType.DISPLAY;
            case "OTHER":
                return GoodsType.OTHER;
            default:
                return GoodsType.OTHER;
        }
    }

    const Navigate = (id:number) => {
        navigate(`/sell/${id}`, { state: { id: id } });
    }
    
    const initSellPost =({sellPost,post,contact="",price,type,sold}:
        {sellPost:SellPost,post:Post,contact:string,price:number,type:GoodsType,sold:boolean})=>{
        sellPost.setPost(post);
        sellPost.setContact(contact);
        sellPost.setPrice(price);
        sellPost.setGoodsType(type);
        sellPost.setSold(sold);
    }
    
    const GetPost=()=>{
        if(type===0){
            const request = new ListSellPostsRequest();
            request.setPriceUpbond(upbond);
            request.setNumber(10);
            if(optGoodType!=="ALL"){
                request.setGoodsType(GetType(optGoodType));
            }
            client.listSellPosts(request, {}, (err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    setSellPosts(response.getPostsList());
                }
            });
        } else{
            const request=new ListPersonalPostsRequest();
            switch(type){
                case 1: request.setType(ListRequestType.STAR);break;
                case 2: request.setType(ListRequestType.OWN);break;
                case 3: request.setType(ListRequestType.TAKEPART);break;
                default: request.setType(ListRequestType.OWN);break;
            }
            request.setUserId(uid);
            request.setPostType(PostType.SELLPOST);
            request.setNumber(10);
            client.listPersonalPosts(request,{},(err,response)=>{
                if(err){
                    console.log(err);
                }else{
                        setSellPosts(response.getSresponse()!.getPostsList());
                }
                }
            )
            }
    }

    const Submit = () => {
        if(title===""||content===""){
            alert("标题或内容不能为空");
            return;
        }
        const post=new Post();
        initPost({post:post,id:0,title:title,user_id:uid,content:content,created_at:0,image:imgList});
        const sellPost=new SellPost();
        initSellPost({sellPost:sellPost,post:post,contact:cantact,price:price,type:Goodtype1,sold:sold});
        const request=new CreateSellPostRequest();
        request.setPost(sellPost);
        client.createSellPost(request,{},(err,response) => {
            if(err){
                console.log(err);
            }else{
                console.log(response.getSuccess());
                setGetPost(true);
                setContent("");
                setTitle ("");
                setContact('');
                setImgList([]);
            }
        });
    }

    if(getPost){
        //getUser();
        console.log(getPost);
        setTimeout(GetPost,100);
        setGetPost(false);
    }


    return <div className="SellList">
        <div className="opt">
            <span className="upbond">最高价格</span>
                    <input type="number" placeholder="最高价格" value={upbond} onChange={
                        (e)=>{setUpbond(parseInt(e.target.value))}}/>
                <span className="GoodType"> 商品类型 </span>
            <select value={optGoodType} onChange={(e) => {
                setOptGoodType(e.target.value);      
            }}>
            <option value="BOOK">书籍</option>
            <option value="COMPUTER">电子产品</option>
            <option value="TICKET">票务</option>
            <option value="DISPLAY">展示品</option>
            <option value="OTHER">其他</option>
            <option value="ALL">不限</option>
            </select>
            <button onClick={()=>{setGetPost(true)}}>确认</button>
        </div>

        <div className="SellPosts">
        {sellPosts.map((sellPost) => {
            return <div key={sellPost.getPost()?.getId()} onClick={() => Navigate(sellPost.getPost()?.getId()!)}>
                <h2>{sellPost.getPost()?.getTitle()}</h2>
                <div className="content">
                    <p>{sellPost.getPost()?.getContent()}</p>
                <p className="like">点赞数:{sellPost.getPost()!.getLikes()}</p>
                <p className="favor">收藏数:{sellPost.getPost()!.getFavorates()}</p> 
            </div>
                </div>
        })}
        </div>

        {type ===0 &&<button className="createButton" onClick={()=>setShowCreate(true)}>发布新帖子</button>}

        {showCreate &&(<div className="create">
            <div className="title">
                <input
                    type="text"
                    placeholder="输入标题"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="GoodType">
                请选择商品类型
            <select value={GoodType} onChange={(e) => {
                setGoodType(e.target.value);
                setGoodType1(GetType(e.target.value));
            }}>
                <option value="BOOK">书籍</option>
                <option value="COMPUTER">电子产品</option>
                <option value="TICKET">票务</option>
                <option value="DISPLAY">展示品</option>
                <option value="OTHER">其他</option>
            </select>
            </div>

            <div className="price">
                <input
                    type="text"
                    placeholder="输入价格"
                    value={strpirce}
                    onChange={(e) => {setStrPrice(e.target.value);
                        setPrice(Number(e.target.value))}}
                />
            </div>

            <div className="sold">
                请选择商品状态:
            <select value={type} onChange={(e) => {
                setSold1(e.target.value);
                setSold(e.target.value==="on sale"?false:true);
            }}>
                <option value="on sale">未售出</option>
                <option value="sold">已售出</option>
            </select>
            </div>

            <div className="contact">
                <input
                    type="text"
                    placeholder="输入联系方式"
                    value={cantact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </div>

            <div className="content">
            <textarea
    placeholder="输入内容"
    value={content}
    onChange={(e) => setContent(e.target.value)}
    rows={4} /* 初始行数 */
  />
            </div>
            <div className="img">
                上传图片
                <input type="file" style={{ display: "上传图片" }}  accept="image/*"
               multiple onChange={(e) => {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        setImgList([...imgList, (e.target?.result as string).split(',')[1]]); // base64
                    }
                    reader.readAsDataURL(e.target.files![0]);
                }
                }
                />
            {imgList.map((img) => {
                    return <img onClick={()=>{
                        setImgList(imgList.filter((img1)=>img1!==img));
                    }} 
                    src={changeImg(img)} alt="img"  height="100" />
                })
            }
                </div>
            <div className="buttons">
            <button  className="submit" onClick={()=>{Submit();setShowCreate(false)}}>确认</button>
            <button className="close" onClick={()=>setShowCreate(false)}>关闭</button>
            </div>
        
      </div>)}

      <button className="return" onClick={()=>{localStorage.setItem("type",JSON.stringify(0));navigate("/home")}}>返回首页</button>
    </div>
    
}

export default SellList;