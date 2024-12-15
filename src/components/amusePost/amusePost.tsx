import { useLocation, useNavigate } from 'react-router-dom';
import { AmusementPost, GameType } from '../../proto/amusementPost_pb'; 
import { Comment } from '../../proto/post_pb';
import { ForumClient } from '../../proto/ForumServiceClientPb';
import {GetPostRequest} from '../../proto/forum_pb';
import { GetUserRequest, User } from '../../proto/auth_pb';
import { useState } from 'react';
import { AuthClient } from '../../proto/AuthServiceClientPb';
import { Submit,DeleteComment } from '../../functions/comment';
import { DeletePost } from '../../functions/post';
import './amusePost.css'
const auth = new AuthClient('http://localhost:8080');
const client = new ForumClient('http://localhost:8080');

const ShowAmusementPost = ({token}:{token:string | Uint8Array}) => {
    const myuser=new User();
    const [user,setUser]=useState(myuser);
    const [uid,setUid]=useState(0);
    const Comments:Comment[]=[];
    const [comments,setComments]=useState(Comments);
    const [content,setContent]=useState('');
    const Post=new AmusementPost();
    const [state,setState]=useState(false);
    const [getPost,setGetPost]=useState(true);
    const [post,setPost]=useState(Post);
    const location = useLocation();
    const id = location.state ? location.state.id: undefined;
    const navigate=useNavigate();

const getUser=()=>{
        const request=new GetUserRequest();
        request.setUserId(uid);
        auth.getUser(request,{},(err,response)=>{
            if(err){
                console.log(err);
            }else{
                setUser(response.getUser()!);
                setUid(response.getUser()!.getId());
            }
        })
    
    }

const GetType=(type:number)=>{
    switch(type){
        case GameType.WOLFKILL:
            return '狼人杀';
        case GameType.JVBEN:
            return '剧本杀';
        case GameType.BLOODTOWER:
            return '血战塔';
        case GameType.KARAOK:
            return '卡拉OK';
        case GameType.BOARDGAME:
            return '桌游';
        case GameType.SPORTS:
            return '运动';
        case GameType.RIDING:
            return '骑行';
        case GameType.OTHER:
            return '其他';
        default:
            return '其他';
    }
}

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id);
    
    client.getAmusementPost(request,{},(err,response)=>{
        if(err){
            console.log(err);
            setState(false);
        }else{
            
           if(response.getSuccess()){
                setPost(response.getPost()!);
                setState(true);
                setComments(response.getPost()!.getPost()?.getCommentsList()!);
           }else{
                setState(false);
           }
        }
    })
}

if(getPost){
    setTimeout(GetPost,100);
    getUser();
   setGetPost(false);
}

    return <div className='showAmusementPost'>
        <div className='AmusementPost'>
        <button className='delete' onClick={()=>{
                DeletePost(post.getPost()?.getId()!,client);
                navigate('/amuse');
            }}>删除帖子</button>
        <h2>{post.getPost()?.getTitle()}</h2>
        <div className='content'>
            {post.getPost()?.getContent()}
        </div>
        <div className='place'>
            地点: {post.getAmusePlace()}
        </div>
        <div className='time'>
            时间={post.getStartTime()}
        </div>  
        <div className='type'>
            游戏类型={GetType(post.getGameType())}
        </div>  
        <div className='people'>
            需要人数={post.getPeopleAll()}
            已有人数={post.getPeopleAlready()}
        </div>  
        <div className='contact'>
            联系方式={post.getContact()}
        </div>  
        <div className='Comments'>
            <h2>评论区</h2>
            {comments.map((comment) => {
                return <div key={comment.getId()} >
                    {comment.getContent()}
                    {<button onClick={
                        ()=>{DeleteComment(id,comment.getId(),client,user.getId())
                        setGetPost(true);
                    }}>删除评论</button>}
                    </div>
            })}
        </div>    
        </div>

        <div className='createComment'> 
            <div className='inputContent'>
                <textarea
                    placeholder='发条友善的评论吧'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
        <button onClick={()=>{
            Submit(id,content,client,uid);
            setContent('')
            setGetPost(true);
        }}>确认</button>
      </div>
        </div>
}
export default ShowAmusementPost;