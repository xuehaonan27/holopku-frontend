import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { Post} from "../../proto/post_pb";
import { CreateFoodPostRequest,ListFoodPostsRequest} from "../../proto/forum_pb";
import { DeletePost, initPost} from "../../fucntions/post";
import { Rate } from 'antd';
import { useNavigate } from "react-router-dom";
import "./foodPostList.css";
const client = new ForumClient("http://localhost:8080");

const FoodList = ({token}:{token:string | Uint8Array}) => {
    const FoodPosts: FoodPost[] = [];
    const[showCreate,setShowCreate] = useState(false);
    const[title,setTitle] = useState("");
    const [foodPosts, setFoodPosts] = useState(FoodPosts);
    const[content,setContent] = useState("");
    const[score,setScore] = useState(0);
    const [place,setPlace]=useState("");
    const [place1,setPlace1]=useState(Place.OTHER);
    const [getPost,setGetPost]=useState(true);
    const navigate = useNavigate();

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
        foodPost.setPlace(place);
        foodPost.setScore(score);
    }
    

    const GetPost=()=>{
        const request = new ListFoodPostsRequest();
        request.setScoreLowbond(0);
        request.setRandom(false);
        request.setNumber(5);
        client.listFoodPosts(request, {}, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                setFoodPosts(response.getPostsList());
                console.log(1);
            }
        });
    
    }

    const Submit = () => {
        const post=new Post();
        initPost({post:post,id:0,title:title,user_id:1,content:content,created_at:0,image:[]});
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
            }
        });
    }

    if(getPost){
        GetPost();
        setGetPost(false);
    }


    return <div>
        <div className="FoodPosts">
        {foodPosts.map((foodPost) => {
            return <div key={foodPost.getPost()!.getId()}>
                <div key={foodPost.getPost()?.getId()} onClick={() => Navigate(foodPost.getPost()?.getId()!)}>
                <h2>{foodPost.getPost()?.getTitle()}</h2>
                <div className="content">
                    <p>{foodPost.getPost()?.getContent()}</p>
                <p className="like">点赞数:{foodPost.getPost()!.getLikes()}</p>
                <p className="favor">收藏数:{foodPost.getPost()!.getFavorates()}</p> 
                </div>
            </div>
            <button className="delete" onClick={()=>{
                DeletePost(foodPost.getPost()?.getId()!,client);
                setGetPost(true);
            }}>删除帖子</button>
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
            
        <button onClick={Submit}>确认</button>
        <button onClick={()=>setShowCreate(false)}>关闭</button>
      </div>)}
    </div>
    
}

export default FoodList;