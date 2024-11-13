import { useLocation, useParams } from "react-router-dom";
import { AmusementPost,GameType } from "../../proto/amusementPost_pb"; 
import { Post } from "../../proto/post_pb";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import {GetPostRequest} from "../../proto/forum_pb";
import { useState } from "react";
const client = new ForumClient("10.129.82.144:8080");

const AmusementPosts: AmusementPost[] = [];
const ShowAmusementPost = () => {
    const location = useLocation();
    console.log(location.state);
    const id = location.state ? location.state.id: undefined;
    console.log(location.state);
const GetPostTest=()=>{
    AmusementPosts.length = 0;
    const post1= new Post();
    post1.setTitle("test1");
    post1.setContent("test1");
    post1.setUserId(0);
    post1.setId(0);
    const post2= new Post();
    post2.setTitle("test2");
    post2.setContent("test2");
    post2.setId(1);
    const amusementPost1 = new AmusementPost();
    const amusementPost2 = new AmusementPost();
    AmusementPosts.push(amusementPost1);
    AmusementPosts.push(amusementPost2);
    const amusementPost=AmusementPosts[id];
    return <div>
        {amusementPost ? (
            <ShowPost amusementPost={amusementPost} />
        ) : (
            <div>Post not found</div>
        )}
    </div>
}

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id);
    const Post=new AmusementPost();
    const [state,setState]=useState(false);
    const [post,setPost]=useState(Post);
    client.getAmusementPost(request,{},(err,response)=>{
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
            <ShowPost amusementPost={post} />
        ) : (
            <div>Post not found</div>
        )}
    </div>
}
const ShowPost=({amusementPost}:{amusementPost:AmusementPost})=>{//展示帖子
    return <div className="AmusementPost">
        <div className="title">
            {amusementPost.getPost()?.getContent()}
        </div>
        </div>
}
    return <GetPostTest />
}
export default ShowAmusementPost;