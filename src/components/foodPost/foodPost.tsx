import { useLocation, useNavigate } from 'react-router-dom';
//import { flushSync } from 'react-dom';
import { FoodPost, Place } from '../../proto/foodPost_pb'; 
import { Comment } from '../../proto/post_pb';
import { ForumClient } from '../../proto/ForumServiceClientPb';
import {FavorateRequest, GetPostRequest, LikePostRequest, UnfavorateRequest, UnlikePostRequest} from '../../proto/forum_pb';
import {  GetUserRequest, User } from '../../proto/auth_pb';
import { useState } from 'react';
import { Submit,DeleteComment } from '../../functions/comment';
import { changeImg, DeletePost } from '../../functions/post';
import StarRating from '../../functions/StarRating';
import './foodPost.css';
import { AuthClient } from '../../proto/AuthServiceClientPb';
import React from 'react';

const auth = new AuthClient('http://localhost:8080');
const client = new ForumClient('http://localhost:8080');

const ShowFoodPost = () => {
    const [user,setUser]=useState<User>(new User());
    const [comments,setComments]=useState<Comment[]>([]);
    const [content,setContent]=useState('');
    const [getPost,setGetPost]=useState(true);
    const foodPost=new FoodPost();
    const [post,setPost]=useState<FoodPost>(foodPost);
    const [imgList,setImgList]=useState<string[]>([]);
    const [icon,setIcon]=useState('');
    const location = useLocation();
    const navagate = useNavigate();
    const [favor,setFavor]=useState(false);
    const id = location.state ? location.state.id: undefined;
    const token = JSON.parse(localStorage.getItem('token')!);
    const uid=JSON.parse(localStorage.getItem('uid')!);

const getPlace=(place:number)=>{
    switch(place){
        case Place.JIAYUAN:
            return '家园';
        case Place.YIYUAN:
            return '艺园';
        case Place.YANNAN:
            return '燕南';
        case Place.NONGYUAN:
            return '农园';
        case Place.XUEYI:
            return '学一';
        case Place.XUEWU:
            return '学五';
        case Place.OTHER:
            return '其他';
        default:
            return '不限';
    }
}

const getUser=()=>{
    console.log(uid);
        const request=new GetUserRequest();
        request.setUserId(uid)
        auth.getUser(request,{},(err,response)=>{
            if(err){
                console.log(err);
            }else{
                setUser(response.getUser()!);
                const img0=response.getUser()!.getIcon()!;
                if(typeof img0 === 'string'){
                    setIcon(changeImg(img0));
                }else{
                    //console.log(new TextDecoder("utf-8").decode(img0));
                    setIcon(changeImg(new TextDecoder("utf-8").decode(img0)));
                }
            }
        })
    
    }

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id);
    
    client.getFoodPost(request,{},(err,response)=>{
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
    getUser();
    setTimeout(GetPost,100);
   setGetPost(false);
}

    return <div className='showFoodPost'>
        <div className='FoodPost'>
        {(post.getPost()?.getUserId()! === user.getId())&&
        <button className='delete' onClick={()=>{
                DeletePost(post.getPost()?.getId()!,client);
                navagate('/food');
            }}>删除帖子</button>}

        <h2>{post.getPost()?.getTitle()}</h2>
        <div className="userInfo">
            <img src={ icon } className='icon' alt='头像' width='50' height='50' />
            <span className='userName'>{user.getUsername()!}</span>
        </div>
        <div className='Score'>
            <StarRating score={post.getScore()} />
        </div>  
        <div className='Place'>
            地点: {getPlace(post.getFoodPlace())}
        </div>
        <div className='content'>
            {post.getPost()?.getContent()}
        </div>
        <div className='showImg'>
            {
            imgList.map((img) => {
                return <img src={img} alt='图片'   height='200'  />
            })}
        <div className="likeAndFavor">
            {(user.getLikedPostsList().includes(id))?<span className='liked' onClick={()=>unLikePost()}>❤</span>:<span className='notLiked' onClick={()=>likePost()}>❤</span>}
            {(user.getFavoritePostsList().includes(id))?<span className="favored" onClick={()=>unFavorPost()}>★</span>:<span className='notFavored' onClick={()=>FavorPost()}>★</span>}
        </div>
            
        </div>
    
        <div className='Comments'>
            <h2>评论区</h2>
            {comments.map((comment) => {
                return <div key={comment.getId()} >
                    {comment.getContent()}
                    {(user.getId() === comment.getUserId())&&
                    <button onClick={
                        ()=>{DeleteComment(id,comment.getId(),client,user.getId())
                        setGetPost(true);
                    }}>删除评论</button>
                }
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
                    rows={5}
                />
            </div>
        <button onClick={()=>{
            Submit(id,content,client,user.getId());
            setContent('');
            setGetPost(true);
        }}>确认</button>
      </div>
        </div>
}
export default ShowFoodPost;