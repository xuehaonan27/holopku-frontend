import { DeletePostRequest } from '../proto/forum_pb';
import { ForumClient } from '../proto/ForumServiceClientPb';
import { Post, PostType } from '../proto/post_pb';

export const initPost =({post,id,title,user_id,content,created_at,image}:
    {post:Post,
    id:number,
    title:string,
    user_id:number,
    content:string,
    created_at:number,
    image:string[]})=>{
    post.setId(id);
    post.setPostType(PostType.FOODPOST);
    post.setLikes(0);
    post.setFavorates(0);
    post.setCommentsList([]);
    post.setTitle(title);
    post.setUserId(user_id);
    post.setContent(content);
    image.map((img,index)=>{
        image[index]=btoa(img);
    })
    console.log(image);
    post.setImagesList(image);

}


export const DeletePost=(id:number, client:ForumClient)=>{
    const request=new DeletePostRequest();
    request.setPostId(id);
    client.deletePost(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }else{
            console.log(response.getSuccess());
        }
    })
}
 export const changeImg=(img:string)=>{
    return "data:image/png;base64," + img;
 }

