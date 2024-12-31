import { CommentRequest, DeleteCommentRequest } from '../proto/forum_pb';
import { ForumClient } from '../proto/ForumServiceClientPb';
import { Comment } from '../proto/post_pb';

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

export const Submit=(id:number,content:string,client:ForumClient,uid:number)=>{
    const comment=new Comment();
    if(content===''){
        alert('标题或内容不能为空');
        return;
    }   
    if(content[content.length-1]==='\n'){
        content=content.substring(0,content.length-1);
    }
    console.log(content);
    initComment({comment:comment,id:0,post_id:id,user_id:uid,content:content,created_at:0});
    const request=new CommentRequest();
    request.setContent(content);
    request.setPostId(id);
    request.setUserId(uid);
    client.comment(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }else{
            console.log(response.getSuccess());
        }
    });
}

export const DeleteComment=(id:number,commentId:number,client:ForumClient,uid:number)=>{
    const request=new DeleteCommentRequest();
    request.setPostId(id);
    request.setUserId(uid);
    request.setCommentId(commentId);
    client.deleteComment(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }else{             
            console.log(response.getSuccess());
        }
    });
}

export const myHash=(str:string):string=>{
    let hash=0;
    if(str.length===0) return hash.toString();
    for(let i=0;i<str.length;i++){
        const char=str.charCodeAt(i);
        hash=((hash<<5)-hash)+char;
        hash=hash&hash;
    }
    return hash.toString();
}