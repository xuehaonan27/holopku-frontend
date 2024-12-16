import { useLocation, useNavigate } from 'react-router-dom';
import { Comment } from '../../proto/post_pb';
import { ForumClient } from '../../proto/ForumServiceClientPb';
import {FavorateRequest, GetPostRequest, LikePostRequest, UnfavorateRequest, UnlikePostRequest} from '../../proto/forum_pb';
import { GetUserRequest, User } from '../../proto/auth_pb';
import { useState } from 'react';
import { AuthClient } from '../../proto/AuthServiceClientPb';
import { Submit,DeleteComment } from '../../functions/comment';
import { SellPost,GoodsType } from '../../proto/sellPost_pb';
import { changeImg, DeletePost } from '../../functions/post';
import './sellPost.css';

const auth = new AuthClient('http://localhost:8080');
const client = new ForumClient('http://localhost:8080');

const ShowSellPost = () => {
    const [user,setUser]=useState<User>(new User());
        const [comments,setComments]=useState<Comment[]>([]);
        const [content,setContent]=useState('');
        const [getPost,setGetPost]=useState(true);
        const [post,setPost]=useState<SellPost>(new SellPost());
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
            case GoodsType.BOOK:
                return '书籍';
            case GoodsType.COMPUTER:
                return '电子产品';
            case GoodsType.TICKET:
                return '票务';
            case GoodsType.DISPLAY:
                return '展示品';
            case GoodsType.OTHER:
                return '其他';
            default:
                return '不限';
        }
    }
    

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id);
    client.getSellPost(request,{},(err,response)=>{
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

return <div className='showSellPost'>
<div className='SellPost'>
{(post.getPost()?.getUserId()! === user.getId())&&
<button className='delete' onClick={()=>{
        DeletePost(post.getPost()?.getId()!,client);
        navagate('/sell');
    }}>删除帖子</button>}

<h2>{post.getPost()?.getTitle()}</h2>
<div className="userInfo">
    <img src={ icon } className='icon' alt='头像' width='50' height='50' />
    <span className='userName'>{userName}</span>
</div>

<div className='GoodsType'>
    商品类型：{GetType(post.getGoodsType())}
</div>

<div className='Price'>
    价格：{post.getPrice()} 元
</div>  

<div className='OnSale'>
    {post.getSold()?'已售出':'未售出'}
</div>  



{(post.getContact()!== '') && <div className='Contact'>
    联系方式：{post.getContact()}
</div>}

<div className='content'>
    {post.getPost()?.getContent()}
</div>
<div className='showImg'>
    {
    imgList.map((img,index) => {
        return <img src={img} id={index.toString()} alt='图片'   height='200'  />
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
                setGetPost(true);setImgList([]);
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
    setImgList([]);
}}>确认</button>
</div>
</div>
}

export default ShowSellPost;