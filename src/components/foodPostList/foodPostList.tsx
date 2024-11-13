import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { SellPost,GoodsType } from "../../proto/sellPost_pb";
import { AmusementPost,GameType } from "../../proto/amusementPost_pb";
import { Post } from "../../proto/post_pb";
import { CreateFoodPostRequest, ListAmusementPostsRequest, ListFoodPostsRequest, ListSellPostsRequest } from "../../proto/forum_pb";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
const client = new ForumClient("10.129.82.144:8080");

const FoodList = () => {
    const FoodPosts: FoodPost[] = [];
    const[showCreate,setShowCreate] = useState(false);
    const[newContent,setNewContent] = useState("");
    const navigate = useNavigate();

    const Navigate = (id:number) => {
        navigate(`/food/${id}`, { state: { id: id } });
    }

    const ListFoodPosts = () => {
        FoodPosts.length = 0;
        const [foodPosts, setFoodPosts] = useState(FoodPosts);
        const request = new ListFoodPostsRequest();
        request.setFoodPlace(Place.JIAYUAN);
        request.setScoreLowbond(0);
        request.setRandom(false);
        request.setNumber(10);
        client.listFoodPosts(request, {}, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                setFoodPosts(response.getPostsList());
            }
        });
        FoodPosts.push(...foodPosts);
    
        return <div>
        {FoodPosts.map((post) => {
            return <div key={post.getPost()?.getId()} onClick={() => Navigate(post.getPost()?.getId()!)}>
                {post.getPost()?.getTitle()}</div>
        })}
    </div>
    }

    const ListPostsTest = () => {
        FoodPosts.length = 0;
        const post1= new Post();
        post1.setTitle("test1");
        post1.setContent("test1");
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
        return <div>
            {FoodPosts.map((post) => {
                return <div key={post.getPost()?.getId()} onClick={() => Navigate(post.getPost()?.getId()!)}>
                    {post.getPost()?.getTitle()}</div>
            })}
        </div>
    }

    const Submit = ({content}: {content: string}) => {
        const post=new Post();
        post.setContent(content);
        const foodPost=new FoodPost();
        foodPost.setPost(post);
        foodPost.setPlace(Place.JIAYUAN);
        foodPost.setScore(5);
        const request=new CreateFoodPostRequest();
        request.setPost(foodPost);
        client.createFoodPost(request,{},(err,response) => {
            if(err){
                console.log(err);
            }else{
                console.log(response.getSuccess());
            }
        });
    }

    return <div>
        <ListPostsTest />
        <button onClick={()=>setShowCreate(true)}>发布新帖子</button>
        {showCreate &&(<div className="create">
        <input
          type="text"
            placeholder="输入内容"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
        />
        <button onClick={() => Submit({ content: newContent })}>确认</button>
        <button >关闭</button>
      </div>)}
    </div>
    
}

export default FoodList;