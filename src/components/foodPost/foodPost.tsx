import { useLocation, useParams } from "react-router-dom";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { Post } from "../../proto/post_pb";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import {GetPostRequest} from "../../proto/forum_pb";
import { useState } from "react";
const client = new ForumClient("10.129.82.144:8080");

const ShowFoodPost = () => {
    const FoodPosts: FoodPost[] = [];
    const location = useLocation();
    console.log(location.state);
    const id = location.state ? location.state.id: undefined;
    console.log(location.state);

const GetPostTest=()=>{
    FoodPosts.length = 0;
    const post1= new Post();
    post1.setTitle("test1");
    post1.setContent("test1");
    post1.setUserId(0);
    post1.setId(0);
    const post2= new Post();
    post2.setTitle("test2");
    post2.setContent("test2");
    post2.setId(1);
    const foodPost1 = new FoodPost();
    foodPost1.setPost(post1);
    foodPost1.setPlace(Place.JIAYUAN);
    foodPost1.setScore(5);
    const foodPost2 = new FoodPost();
    foodPost2.setPost(post2);
    foodPost2.setPlace(Place.JIAYUAN);
    foodPost2.setScore(4);
    FoodPosts.push(foodPost1);
    FoodPosts.push(foodPost2);
    const foodPost=FoodPosts[id];
    return <div>
        {foodPost ? (
            <ShowPost foodPost={foodPost} />
        ) : (
            <div>Post not found</div>
        )}
    </div>
}

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id);
    const Post=new FoodPost();
    const [state,setState]=useState(false);
    const [post,setPost]=useState(Post);
    client.getFoodPost(request,{},(err,response)=>{
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
            <ShowPost foodPost={post} />
        ) : (
            <div>Post not found</div>
        )}
    </div>
}
const ShowPost=({foodPost}:{foodPost:FoodPost})=>{//展示帖子
    return <div className="FoodPost">
        <div className="title">
            {foodPost.getPost()?.getContent()}
        </div>
        <div className="Place">
            {foodPost.getPlace()}
        </div>
        <div className="Score">
            Score={foodPost.getScore()}
        </div>      
        </div>
}
    return <GetPostTest />
}
export default ShowFoodPost;