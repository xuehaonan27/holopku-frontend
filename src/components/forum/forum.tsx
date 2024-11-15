import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { FoodPost, Place } from "../../proto/foodPost_pb"; 
import { SellPost,GoodsType } from "../../proto/sellPost_pb";
import { AmusementPost,GameType } from "../../proto/amusementPost_pb";
import { Post } from "../../proto/post_pb";
import { CreateFoodPostRequest, ListAmusementPostsRequest, ListFoodPostsRequest, ListSellPostsRequest } from "../../proto/forum_pb";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import "./forum.css";

const client = new ForumClient("10.129.82.144:8080");
const ForumService = ({token}:{token:string | Uint8Array}) => {
const navigate = useNavigate();


    return <div className="forum">
        <div><button className="food" onClick={()=>navigate("/food") }>Food</button></div>
        <div><button className="sell" onClick={()=>navigate("/sell")}>Sell</button></div>
        <div><button className="amuse" onClick={()=>navigate("/amuse")}>Amusement</button></div>
    </div>
}
export default ForumService;