import { CommentRequest, DeleteCommentRequest } from "../proto/forum_pb";
import { ForumClient } from "../proto/ForumServiceClientPb";
import { Post, PostType, Comment } from "../proto/post_pb";

export const initComment =({comment,post_id,user_id,content,created_at}:{
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

export const Submit=(id:number,content:string,client:ForumClient)=>{
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
        }
    });
    console.log(comment.getContent());
}

export const DeleteComment=(id:number,commentId:number,client:ForumClient)=>{
    const request=new DeleteCommentRequest();
    request.setPostId(id);
    request.setUserId(1);
    request.setCommentId(commentId);
    client.deleteComment(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }else{             
            console.log(response.getSuccess());
        }
    });
}