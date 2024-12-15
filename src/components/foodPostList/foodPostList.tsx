import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { Post, PostType} from "../../proto/post_pb";
import { CreateFoodPostRequest,ListFoodPostsRequest, ListFoodPostsResponse, ListPersonalPostsRequest, ListRequestType} from "../../proto/forum_pb";
import { initPost,changeImg} from "../../functions/post";
import { Rate } from 'antd';
import { useNavigate } from "react-router-dom";
import StarRating from "../../functions/StarRating";
import "./foodPostList.css";
import { GetUserRequest, User } from "../../proto/auth_pb";
import { AuthClient } from "../../proto/AuthServiceClientPb";
import { log } from "console";

const auth = new AuthClient('http://localhost:8080');
const client = new ForumClient("http://localhost:8080");

const FoodList = () => {
    const[showCreate,setShowCreate] = useState(false);
    const[title,setTitle] = useState("");
    const [foodPosts, setFoodPosts] = useState<FoodPost[]>([]);
    const[content,setContent] = useState("");
    const[score,setScore] = useState(0);
    const [place,setPlace]=useState("OTHER");
    const [place1,setPlace1]=useState(Place.OTHER);
    const [optPlace,setOptPlace]=useState("ALL");
    const [getPost,setGetPost]=useState(true);
    const [imgList,setImgList]=useState<string[]>([]);
    const [lowbond,setLowbond]=useState(0); 
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token')!);
    const uid=JSON.parse(localStorage.getItem('uid')!);
    const type=JSON.parse(localStorage.getItem('type')!);


    const GetPlace=({place}:{place:string})=>{
        switch(place){
            case "JIAYUAN":
                return Place.JIAYUAN;
            case "YIYUAN":
                return Place.YIYUAN;
            case "YANNAN":
                return Place.YANNAN;
            case "NONGYUAN":
                return Place.NONGYUAN;
            case "XUEYI":
                return Place.XUEYI;
            case "XUEWU":
                return Place.XUEWU;
            case "OTHER":
                return Place.OTHER;
            default:
                return Place.OTHER;
        }
    }


    const Navigate = (id:number) => {
                navigate(`/food/${id}`, { state: { id: id } });
    }
    
    const initFoodPost =({foodPost,post,place,score}:{foodPost:FoodPost,post:Post,place:Place,score:number})=>{
        foodPost.setPost(post);
        foodPost.setFoodPlace(place);
        foodPost.setScore(score);
    }

    const GetPost=()=>{
        if(type===0){
            const request = new ListFoodPostsRequest();
            request.setScoreLowbond(lowbond);
            request.setRandom(false);
            request.setNumber(10);
            if(optPlace!=="ALL"){
                request.setFoodPlace(GetPlace({place:optPlace}));
            }
            client.listFoodPosts(request, {}, (err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    setFoodPosts(response.getPostsList());
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
            request.setPostType(PostType.FOODPOST);
            request.setNumber(10);
            client.listPersonalPosts(request,{},(err,response)=>{
                if(err){
                    console.log(err);
                }else{
                        setFoodPosts(response.getFresponse()!.getPostsList());
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
        const foodPost=new FoodPost();
        initFoodPost({foodPost:foodPost,post:post,place:place1,score:score});
        const request=new CreateFoodPostRequest();
        request.setPost(foodPost);
        client.createFoodPost(request,{},(err,response) => {
            if(err){
                console.log(err);
            }else{
                console.log(response.getSuccess());
                setGetPost(true);
                setContent("");
                setTitle ("");
                setScore(0);
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
    

    return <div className= "FoodList">
        <div className="opt">
            <span className="lowbond">最低评分</span>
                    <input type="number" placeholder="最低评分" value={lowbond} onChange={
                        (e)=>{if(parseInt(e.target.value)>5){setLowbond(5)}else setLowbond(parseInt(e.target.value))}}/>
                <span className="foodPlace"> 就餐地点</span>
            <select value={optPlace} onChange={(e) => {
                setOptPlace(e.target.value);      
            }}>
            <option value="JIAYUAN">家园</option>
            <option value="YIYUAN">艺园</option>
            <option value="YANNAN">燕南</option>
            <option value="NONGYUAN">农园</option>
            <option value="XUEYI">学一</option>
            <option value="XUEWU">学五</option>
            <option value="OTHER">其他</option>
            <option value="ALL">不限</option>
            </select>
            <button onClick={()=>{setGetPost(true)}}>确认</button>
        </div>

        <div className="FoodPosts">
        {foodPosts.map((foodPost) => {
            return <div key={foodPost.getPost()?.getId()} onClick={() => Navigate(foodPost.getPost()?.getId()!)}>
                <h2>{foodPost.getPost()?.getTitle()}</h2>
                <StarRating score={foodPost.getScore()}/>
                <div className="content">
                    <p>{foodPost.getPost()?.getContent()}</p>
                <p className="like">点赞数:{foodPost.getPost()!.getLikes()}</p>
                <p className="favor">收藏数:{foodPost.getPost()!.getFavorates()}</p> 
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
            <div className="place">
                请选择就餐地点
            <select value={place} onChange={(e) => {
                setPlace(e.target.value);
                setPlace1(GetPlace({place:e.target.value}));
            }}>
            <option value="JIAYUAN">家园</option>
            <option value="YIYUAN">艺园</option>
            <option value="YANNAN">燕南</option>
            <option value="NONGYUAN">农园</option>
            <option value="XUEYI">学一</option>
            <option value="XUEWU">学五</option>
            <option value="OTHER">其他</option>
            </select>
            </div>
            <div className="rate">
                请评分
                <Rate value={score} onChange={(value)=>{setScore(value)}}/>
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

export default FoodList;