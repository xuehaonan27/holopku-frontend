import { useLocation, useNavigate } from 'react-router-dom';
import { AmusementPost, GameType } from '../../proto/amusementPost_pb'; 
import { Comment } from '../../proto/post_pb';
import { ForumClient } from '../../proto/ForumServiceClientPb';
import {GetPostRequest} from '../../proto/forum_pb';
import { GetUserRequest, User } from '../../proto/auth_pb';
import { useState } from 'react';
import { AuthClient } from '../../proto/AuthServiceClientPb';
import { Submit,DeleteComment } from '../../functions/comment';
import { changeImg, DeletePost } from '../../functions/post';
import './amusePost.css'
const auth = new AuthClient('http://localhost:8080');
const client = new ForumClient('http://localhost:8080');

const ShowAmusementPost = () => {

    const [user,setUser]=useState<User>(new User());
        const [comments,setComments]=useState<Comment[]>([]);
        const [content,setContent]=useState('');
        const [getPost,setGetPost]=useState(true);
        const [post,setPost]=useState<AmusementPost>(new AmusementPost());
        const [imgList,setImgList]=useState<string[]>([]);
        const [icon,setIcon]=useState('');
        const [userName,setUserName]=useState('');
        const location = useLocation();
        const navagate = useNavigate();
        const id = location.state ? location.state.id: undefined;
        const token = JSON.parse(localStorage.getItem('token')!);
        const uid=JSON.parse(localStorage.getItem('uid')!);

const getUser=()=>{
    console.log(uid);
        const request=new GetUserRequest();
        request.setUserId(uid)
        auth.getUser(request,{},(err,response)=>{
            if(err){
                console.log(err);
            }else{
                setUser(response.getUser()!);
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
            return '血染钟楼';
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
            return '不限';
    }
}

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id)
    client.getAmusementPost(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }else{
            
           if(response.getSuccess()){
                setPost(response.getPost()!);
                setComments(response.getPost()!.getPost()?.getCommentsList()!);
                response.getPost()!.getPost()!.getImagesList().map((img)=>{
                    if(typeof img === 'string'){
                        setImgList([...imgList,changeImg(img)]);
                    }else{
                        setImgList([...imgList,changeImg(new TextDecoder().decode(img))]);
                    }
                })
                const userId=response.getPost()!.getPost()!.getUserId();
                const request1=new GetUserRequest();
        request1.setUserId(userId)
        auth.getUser(request1,{},(err,response1)=>{
            if(err){
                console.log(err);
            }else{
                const img0=response1.getUser()!.getIcon();
                if(typeof img0 === 'string'){
                    setIcon(changeImg(img0));
                }else{
                    //console.log(new TextDecoder("utf-8").decode(img0));
                    setIcon(changeImg(new TextDecoder("utf-8").decode(img0)));
                }
                setUserName(response1.getUser()!.getUsername());
            }
        })
           }
    }
})
}

const likePost=()=>{
    const request=new LikePostRequest();
    request.setPostId(id);
    request.setUserId(user.getId()!);
    console.log(request);
    client.likePost(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }
        else{
            getUser();
        }
    })
} 

const unLikePost=()=>{
    const request=new UnlikePostRequest();
    request.setPostId(id);
    request.setUserId(user.getId());
    client.unlikePost(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }
        else{
            getUser();
        }
    })

} 

const FavorPost=()=>{
    const request=new FavorateRequest();
    request.setPostId(id);
    request.setUserId(user.getId()!);
    console.log(request);
    client.favorate(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }
        else{
            getUser();
        }
    })
} 

const unFavorPost=()=>{
    const request=new UnfavorateRequest();
    request.setPostId(id);
    request.setUserId(user.getId());
    client.unfavorate(request,{},(err,response)=>{
        if(err){
            console.log(err);
        }
        else{
            getUser();
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