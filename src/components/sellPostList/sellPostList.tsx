import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { SellPost, GoodsType } from "../../proto/sellPost_pb"; 
import { Post} from "../../proto/post_pb";
import { CreateSellPostRequest,ListSellPostsRequest} from "../../proto/forum_pb";
import { useNavigate } from 'react-router-dom';
import { DeletePost, initPost} from "../../functions/post";
const client = new ForumClient("http://localhost:8080");

const SellList = ({token}:{token:string | Uint8Array}) => {
    const SellPosts: SellPost[] = [];
    const[showCreate,setShowCreate] = useState(false);
    const[title,setTitle] = useState("");
    const [sellPosts, setSellPosts] = useState(SellPosts);
    const[content,setContent] = useState("");
    const[price,setPrice] = useState(0);
    const[strpirce,setStrPrice] = useState(""); 
    const [type,setType]=useState("");
    const [type1,setType1]=useState(GoodsType.OTHER);
    const [sold1,setSold1]=useState("on sale");
    const [sold,setSold]=useState(false);
    const [cantact,setContact]=useState("无");    
    const [getPost,setGetPost]=useState(true);
    const navigate = useNavigate();

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
    
    const initSellPost =({sellPost,post,contact="无",price,type,sold}:
        {sellPost:SellPost,post:Post,contact:string,price:number,type:GoodsType,sold:boolean})=>{
        sellPost.setPost(post);
        sellPost.setContact(contact);
        sellPost.setPrice(price);
        sellPost.setType(type);
        sellPost.setSold(sold);
    }
    

    const ShowPost=({sellPost}:{sellPost:SellPost})=>{
        return<div>
            <div key={sellPost.getPost()?.getId()} onClick={() => Navigate(sellPost.getPost()?.getId()!)}>
                <h2>{sellPost.getPost()?.getTitle()}</h2>
                <div className="content">{sellPost.getPost()?.getTitle()}</div>
                <div className="like">点赞数:{sellPost.getPost()!.getLikes()}</div>
                <div className="favor">收藏数:{sellPost.getPost()!.getFavorates()}</div> 
            </div>
            <button className="delete" onClick={()=>{
                DeletePost(sellPost.getPost()?.getId()!,client);
                setGetPost(true);
            }}>删除帖子</button>
        </div> 
        
    }

    const GetPost=()=>{
        const request = new ListSellPostsRequest();
        request.setPriceUpbond(100000);
        request.setNumber(5);
        client.listSellPosts(request, {}, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                setSellPosts(response.getPostsList());
                console.log(1);
            }
        });
    
    }

    const Submit = () => {
        const post=new Post();
        initPost({post:post,id:0,title:title,user_id:1,content:content,created_at:0,image:[]});
        const sellPost=new SellPost();
        initSellPost({sellPost:sellPost,post:post,contact:cantact,price:price,type:type1,sold:sold});
        const request=new CreateSellPostRequest();
        request.setPost(sellPost);
        client.createSellPost(request,{},(err,response) => {
            if(err){
                console.log(err);
            }else{
                console.log(response.getSuccess());
                setGetPost(true);
            }
        });
    }

    if(getPost){
        GetPost();
        setGetPost(false);
    }


    return <div>
        <div className="SellPosts">
        {sellPosts.map((post) => {
            return <div key={post.getPost()!.getId()}>
                <ShowPost sellPost={post}/>
                </div>
        })}
        </div>

        <button onClick={()=>setShowCreate(true)}>发布新帖子</button>
        {showCreate &&(<div className="create">
            
            <div className="title">
                <input
                    type="text"
                    placeholder="输入标题"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <div className="type">
                请选择商品类型:
            <select value={type} onChange={(e) => {
                setType(e.target.value);
                setType1(GetType(e.target.value));
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
                <option value="on sale">在售</option>
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
                <input
                    type="text"
                    placeholder="输入内容"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            
        <button onClick={Submit}>确认</button>
        <button onClick={()=>setShowCreate(false)}>关闭</button>
      </div>)}
    </div>
    
}

export default SellList;