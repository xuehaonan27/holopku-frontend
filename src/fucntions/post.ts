
import { useNavigate } from 'react-router-dom';
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
    post.setCreatedAt(created_at);
    post.setImagesList(image);

}

export const Navigate = (id:number) => {
    const navigate = useNavigate();
    navigate(`/food/${id}`, { state: { id: id } });
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

