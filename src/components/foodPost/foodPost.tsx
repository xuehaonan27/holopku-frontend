import { useLocation, useNavigate } from "react-router-dom";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { Comment } from "../../proto/post_pb";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import {GetPostRequest} from "../../proto/forum_pb";
import { User } from "../../proto/auth_pb";
import { useState } from "react";
import { AuthClient } from "../../proto/AuthServiceClientPb";
import { Submit,DeleteComment } from "../../functions/comment";
import { DeletePost } from "../../functions/post";
import StarRating from "../../functions/StarRating";
import "./foodPost.css";
const auth = new AuthClient("http://localhost:8080");
const client = new ForumClient("http://localhost:8080");

const ShowFoodPost = ({token}:{token:string | Uint8Array}) => {
    const myuser=new User();
    const Comments:Comment[]=[];
    const [comments,setComments]=useState(Comments);
    const [content,setContent]=useState("");
    const Post=new FoodPost();
    const [state,setState]=useState(false);
    const [getPost,setGetPost]=useState(true);
    const [post,setPost]=useState(Post);
    const [imgList,setImgList]=useState<string[]>([]);
    const location = useLocation();
    const navagate = useNavigate();
    const id = location.state ? location.state.id: undefined;

const GetPlace=(place:number)=>{
    switch(place){
        case Place.JIAYUAN:
            return "家园";
        case Place.YIYUAN:
            return "艺园";
        case Place.YANNAN:
            return "燕南";
        case Place.NONGYUAN:
            return "农园";
        case Place.XUEYI:
            return "学一";
        case Place.XUEWU:
            return "学五";
        case Place.OTHER:
            return "其他";
        default:
            return "其他";
    }
}

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id);
    
    client.getFoodPost(request,{},(err,response)=>{
        if(err){
            console.log(err);
            setState(false);
        }else{
            
           if(response.getSuccess()){
                setPost(response.getPost()!);
                setState(true);
                setComments(response.getPost()!.getPost()?.getCommentsList()!);
                setImgList(response.getPost()!.getPost()?.getImagesList()!);
           }else{
                setState(false);
           }
        }
    })
}

if(getPost){
    setTimeout(GetPost,100);
    //GetPost();
   setGetPost(false);
}

    return <div className="showFoodPost">
        <div className="FoodPost">
        <button className="delete" onClick={()=>{
                DeletePost(post.getPost()?.getId()!,client);
                navagate('/food');
            }}>删除帖子</button>

        <h2>{post.getPost()?.getTitle()}</h2>
        <div className="Score">
            <StarRating score={post.getScore()} />
        </div>  
        <div className="Place">
            地点: {GetPlace(post.getPlace())}
        </div>
        <div className="content">
            {post.getPost()?.getContent()}
        </div>
        <div className="showImg">
            {imgList.map((img) => {
                return <img src={img} alt="图片"   height="200"  />
            })}
        </div>
    
        <div className="Comments">
            <h2>评论区</h2>
            {comments.map((comment) => {
                return <div key={comment.getId()} >
                    {comment.getContent()}
                    <button onClick={
                        ()=>{DeleteComment(id,comment.getId(),client)
                        setGetPost(true);
                    }}>删除评论</button>
                    </div>
            })}
        </div>    

        </div>

        <div className="createComment"> 
            <div className="inputContent">
                <textarea
                    placeholder="发条友善的评论吧"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={5}
                />
            </div>
        <button onClick={()=>{
            Submit(id,content,client);
            setContent("");
            setGetPost(true);
        }}>确认</button>
      </div>
        </div>
}
export default ShowFoodPost;