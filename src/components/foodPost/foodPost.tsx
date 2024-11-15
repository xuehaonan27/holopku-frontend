import { useLocation, useParams } from "react-router-dom";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { Post, PostType, Comment } from "../../proto/post_pb";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import {CommentRequest, DeleteCommentRequest, GetPostRequest} from "../../proto/forum_pb";
import { User,GetUserRequest } from "../../proto/auth_pb";
import { useState } from "react";
import { AuthClient } from "../../proto/AuthServiceClientPb";
const auth = new AuthClient("http://localhost:8080");
const client = new ForumClient("http://localhost:8080");

const ShowFoodPost = ({token}:{token:string | Uint8Array}) => {
    const myuser=new User();
    const Comments:Comment[]=[];
    const [comments,setComments]=useState(Comments);
    const [content,setContent]=useState("");
    const [user,setUser]=useState(myuser);
    const Post=new FoodPost();
    const [state,setState]=useState(false);
    const [getPost,setGetPost]=useState(true);
    const [post,setPost]=useState(Post);
    const location = useLocation();
    const id = location.state ? location.state.id: undefined;

const initComment =({comment,post_id,user_id,content,created_at}:{
            comment:Comment,
            id:number,
            post_id:number,
            user_id:number,
            content:string,
            created_at:number
        })=>{
            comment.setId(0);
            comment.setPostId(post_id);
            comment.setUserId(user_id);
            comment.setContent(content);
            comment.setLikes(0);
            comment.setCreatedAt(created_at);
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

const Submit=()=>{
    const comment=new Comment();
    initComment({comment:comment,id:0,post_id:id,user_id:1,content:content,created_at:0});
    const request=new CommentRequest();
    request.setContent(content);
    request.setPostId(id);
    request.setUserId(1);
    client.comment(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }else{
            console.log(response.getSuccess());
            setGetPost(true);
        }
    });
    console.log(comment.getContent());
}

// const DeleteComment=(id:number)=>{
//     const request=new DeleteCommentRequest();
//     request.setPostId(id);
//     request.setUserId(1);
//     request.setCommentId(id);
//     client.deleteComment(request,{},(err,response)=>{
//         if(err){
//             console.log(err);
//         }else{
//             console.log(response.getSuccess());
//             setGetPost(true);
//         }
//     });
// }

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
            {post.getPlace()}
        </div>
        <div className="Score">
            Score={post.getScore()}
        </div>  
        <div className="Comments">
            <h2>评论区</h2>
            {comments.map((comment) => {
                return <div key={comment.getId()} >
                    {comment.getContent()}
                    {/* <button onClick={()=>DeleteComment(comment.getId())}>删除评论</button> */}
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
        <button onClick={Submit}>确认</button>
      </div>
        </div>
}
export default ShowFoodPost;