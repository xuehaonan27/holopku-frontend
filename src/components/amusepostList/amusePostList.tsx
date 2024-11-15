import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { AmusementPost,GameType } from "../../proto/amusementPost_pb";
import { Post } from "../../proto/post_pb";
import { CreateAmusementPostRequest, ListAmusementPostsRequest } from "../../proto/forum_pb";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom';
const client = new ForumClient("10.129.82.144:8080");

const AmusementList = ({token}:{token:string | Uint8Array}) => {
    const AmusementPosts: AmusementPost[] = [];
    const[showCreate,setShowCreate] = useState(false);
    const[newContent,setNewContent] = useState("");
    const navigate = useNavigate();

    const Navigate = (id:number) => {
        navigate(`/amuse/${id}`, { state: { id: id } });
    }

    const ListAmusementPosts = () => {
        AmusementPosts.length = 0;
        const [amusementPosts, setAmusementPosts] = useState(AmusementPosts);
        const request = new ListAmusementPostsRequest();
        //setRequest
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
            return <div key={post.getPost()?.getId()} onClick={() => Navigate(post.getPost()?.getId()!)}>
                {post.getPost()?.getTitle()}</div>
        })}
    </div>
    }

    const ListPostsTest = () => {
        AmusementPosts.length = 0;
        const post1= new Post();
        post1.setTitle("test1");
        post1.setContent("test1");
        post1.setId(0);
        const post2= new Post();
        post2.setTitle("test2");
        post2.setContent("test2");
        post2.setId(1);
        const amusementPost1 = new AmusementPost();
        amusementPost1.setPost(post1);
        const amusementPost2 = new AmusementPost();
        amusementPost2.setPost(post2);
        AmusementPosts.push(amusementPost1);
        AmusementPosts.push(amusementPost2);
        return <div>
            {AmusementPosts.map((post) => {
                return <div key={post.getPost()?.getId()} onClick={() => Navigate(post.getPost()?.getId()!)}>
                    {post.getPost()?.getTitle()}</div>
            })}
        </div>
    }

    const Submit = ({content}: {content: string}) => {
        const post=new Post();
        post.setContent(content);
        const amusementPost=new AmusementPost();
        amusementPost.setPost(post);
        const request=new CreateAmusementPostRequest();
        request.setPost(amusementPost);
        client.createAmusementPost(request,{},(err,response) => {
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

export default AmusementList;