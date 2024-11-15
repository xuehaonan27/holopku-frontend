import { useLocation } from "react-router-dom";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { Comment } from "../../proto/post_pb";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import {GetPostRequest} from "../../proto/forum_pb";
import { User } from "../../proto/auth_pb";
import { useState } from "react";
import { AuthClient } from "../../proto/AuthServiceClientPb";
import { Submit,DeleteComment } from "../../fucntions/comment";
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
    const location = useLocation();
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
           }else{
                setState(false);
           }
        }
    })
}

if(getPost){
    GetPost();
   setGetPost(false);
}

    return <div>
        <div className="FoodPost">
        <h2>{post.getPost()?.getTitle()}</h2>
        <div className="content">
            {post.getPost()?.getContent()}
        </div>
        <div className="Place">
            地点: {GetPlace(post.getPlace())}
        </div>
        <div className="Score">
            Score={post.getScore()}
        </div>  
        <div className="Comments">
            <h2>评论区</h2>
            {comments.map((comment) => {
                return <div key={comment.getId()} >
                    {comment.getContent()}
                    {<button onClick={()=>DeleteComment(id,comment.getId(),client)}>删除评论</button>}
                    </div>
            })}
        </div>    
        </div>

        <div className="createComment"> 
            <div className="inputContent">
                <input
                    type="text"
                    placeholder="发条友善的评论吧"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
        <button onClick={()=>{
            Submit(id,content,client)
            setGetPost(true);
        }}>确认</button>
      </div>
        </div>
}
export default ShowFoodPost;