import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb"; 
import { SellPost,GoodsType } from "../../proto/sellPost_pb";
import { AmusementPost,GameType } from "../../proto/amusementPost_pb";
import { Post } from "../../proto/post_pb";
import { CreateSellPostRequest, ListSellPostsRequest } from "../../proto/forum_pb";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
const client = new ForumClient("10.129.82.144:8080");

const SellList = () => {
    const SellPosts: SellPost[] = [];
    const[showCreate,setShowCreate] = useState(false);
    const[newContent,setNewContent] = useState("");
    const navigate = useNavigate();

    const Navigate = (id:number) => {
        navigate(`/sell/${id}`, { state: { id: id } });
    }

    const ListSellPosts = () => {
        SellPosts.length = 0;
        const [sellPosts, setSellPosts] = useState(SellPosts);
        const request = new ListSellPostsRequest();
        //setRequest
        client.listSellPosts(request, {}, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                setSellPosts(response.getPostsList());
            }
        });
        SellPosts.push(...SellPosts);
    
        return <div>
        {SellPosts.map((post) => {
            return <div key={post.getPost()?.getId()} onClick={() => Navigate(post.getPost()?.getId()!)}>
                {post.getPost()?.getTitle()}</div>
        })}
    </div>
    }

    const ListPostsTest = () => {
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
        return <div>
            {SellPosts.map((post) => {
                return <div key={post.getPost()?.getId()} onClick={() => Navigate(post.getPost()?.getId()!)}>
                    {post.getPost()?.getTitle()}</div>
            })}
        </div>
    }

    const Submit = ({content}: {content: string}) => {
        const post=new Post();
        post.setContent(content);
        const sellPost=new SellPost();
        //setPost
        const request=new CreateSellPostRequest();
        request.setPost(sellPost);
        client.createSellPost(request,{},(err,response) => {
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

export default SellList;