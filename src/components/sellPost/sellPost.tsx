import { useLocation, useParams } from "react-router-dom";
import { SellPost,GoodsType } from "../../proto/sellPost_pb"; 
import { Post } from "../../proto/post_pb";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import {GetPostRequest} from "../../proto/forum_pb";
import { useState } from "react";
const client = new ForumClient("10.129.82.144:8080");

const SellPosts: SellPost[] = [];
const ShowSellPost = () => {
    const location = useLocation();
    const id = location.state ? location.state.id: undefined;
const GetPostTest=()=>{
    SellPosts.length = 0;
    const post1= new Post();
    post1.setTitle("test1");
    post1.setContent("test1");
    post1.setUserId(0);
    post1.setId(0);
    const post2= new Post();
    post2.setTitle("test2");
    post2.setContent("test2");
    post2.setId(1);
    const SellPost1 =new SellPost();
    const SellPost2 =new SellPost();
    SellPost1.setPrice(0);
    SellPost1.setType(GoodsType.COMPUTER);
    SellPost1.setContact("a computer");
    SellPost1.setPost(post1);
    SellPost1.setSold(false);

    SellPost2.setPrice(114514);
    SellPost2.setType(GoodsType.TICKET);
    SellPost2.setContact("a ticket");
    SellPost2.setPost(post2);
    SellPost2.setSold(true);

    SellPosts.push(SellPost1);
    SellPosts.push(SellPost2);
    const sellPost=SellPosts[id];
    return <div>
        {sellPost ? (
            <ShowPost SellPost={sellPost} />
        ) : (
            <div>Post not found</div>
        )}
    </div>
}

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id);
    const Post=new SellPost();
    const [state,setState]=useState(false);
    const [post,setPost]=useState(Post);
    client.getSellPost(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }else{
            
           if(response.getSuccess()){
                setPost(response.getPost()!);
                setState(true);
           };
        }
    })
    return <div>
        {state ? (
            <ShowPost SellPost={post} />
        ) : (
            <div>Post not found</div>
        )}
    </div>
}
const ShowPost=({SellPost}:{SellPost:SellPost})=>{//展示帖子
    return <div className="SellPost">
        <div className="title">
            {SellPost.getContact()}
        </div>
        <div className="type">
            Type={SellPost.getType()}
        </div>
        <div className="price">
            Price={SellPost.getPrice()}
        </div>
        <div className="sold">
         {(SellPost.getSold())?<div>在售</div>:<div>已售出</div>}
        </div>

        </div>
}
    return <GetPostTest />
}
export default ShowSellPost;