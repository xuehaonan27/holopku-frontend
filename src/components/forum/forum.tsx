import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { SellPost,GoodsType } from "../../proto/sellPost_pb";
import { AmusementPost,GameType } from "../../proto/amusementPost_pb";
import { Post } from "../../proto/post_pb";
import { ListAmusementPostsRequest, ListFoodPostsRequest, ListSellPostsRequest } from "../../proto/forum_pb";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const client = new ForumClient("10.129.82.144:8080");
const ForumService = () => {
const FoodPosts: FoodPost[] = [];
const SellPosts: SellPost[] = [];
const AmusementPosts: AmusementPost[] = [];
const navigate = useNavigate();

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
        return <div key={post.getPost()?.getId()} onClick={() => Navigate("food", post.getPost()?.getId()!)}>
            {post.getPost()?.getTitle()}</div>
    })}
</div>
}

const ListSellPosts = () => {
    SellPosts.length = 0;
    const [sellPosts, setSellPosts] = useState(SellPosts);
    const request = new ListSellPostsRequest();
    request.setPriceUpbond(0);
    request.setGoodsType(GoodsType.COMPUTER);
    request.setNumber(10);
    client.listSellPosts(request, {}, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            setSellPosts(response.getPostsList());
        }
    });
    SellPosts.push(...sellPosts);
    return <div>
    {SellPosts.map((post) => {
        return <div key={post.getPost()?.getId()} onClick={() => Navigate("sell", post.getPost()?.getId()!)}>
            {post.getPost()?.getTitle()}</div>
    })}
</div>
}


const ListAmusementPosts = () => {
    AmusementPosts.length = 0;
    const [amusementPosts, setAmusementPosts] = useState(AmusementPosts);
    const request = new ListAmusementPostsRequest();
    request.setGameType(GameType.WOLFKILL);
    request.setNumber(10);
    client.listAmusementPosts(request, {}, (err, response) => {
        if (err) {
            console.log(err);
        } else {
            setAmusementPosts(response.getPostsList());
        }
    });
    AmusementPosts.push(...amusementPosts);
    return <div>
    {AmusementPosts.map((post) => {
        return <div key={post.getPost()?.getId()} onClick={() => Navigate("amusement", post.getPost()?.getId()!)}>
            {post.getPost()?.getTitle()}</div>
    })}
</div>
}

const Navigate = (type:string, id:number) => {
    navigate(`/forum/${type}/${id}`, { state: { id: id } });
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
    const[open,setOpen] = useState(false);
    return <div>
        {FoodPosts.map((post) => {
            return <div key={post.getPost()?.getId()} onClick={() => Navigate("food", post.getPost()?.getId()!)}>
                {post.getPost()?.getTitle()}</div>
        })}
        <button onClick={()=>setOpen(true)}>打开输入框</button>
        <Modal isOpen={open} onConfirm={()=>setOpen(false)} />
    </div>
}


const Modal = ({ isOpen, onConfirm }: {isOpen:boolean;onConfirm:()=>void}) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>输入文本</h2>
        <input
          type="text"
        />
        <button onClick={onConfirm}>确认</button>
        <button >关闭</button>
      </div>
    </div>
  );
};

    return <div>
        <ListPostsTest />
    </div>
}
export default ForumService;