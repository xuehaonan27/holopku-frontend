import { useLocation } from 'react-router-dom';
import { Comment } from '../../proto/post_pb';
import { ForumClient } from '../../proto/ForumServiceClientPb';
import {GetPostRequest} from '../../proto/forum_pb';
import { GetUserRequest, User } from '../../proto/auth_pb';
import { useState } from 'react';
import { AuthClient } from '../../proto/AuthServiceClientPb';
import { Submit,DeleteComment } from '../../functions/comment';
import { SellPost,GoodsType } from '../../proto/sellPost_pb';
const auth = new AuthClient('http://localhost:8080');
const client = new ForumClient('http://localhost:8080');

const ShowFoodPost = ({token}:{token:string | Uint8Array}) => {
    const myuser=new User();
    const [user,setUser]=useState(myuser);
    const [uid,setUid]=useState(0);
    const Comments:Comment[]=[];
    const [comments,setComments]=useState(Comments);
    const [content,setContent]=useState('');
    const Post=new SellPost();
    const [state,setState]=useState(false);
    const [getPost,setGetPost]=useState(true);
    const [post,setPost]=useState(Post);
    const location = useLocation();
    const id = location.state ? location.state.id: undefined;

    const getUser=()=>{
        const request=new GetUserRequest();
        request.setUserId(uid)
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
                return '其他';
        }
    }
    

const GetPost=()=>{
    const request=new GetPostRequest();
    request.setPostId(id);
    
    client.getSellPost(request,{},(err,response)=>{
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

    return <div>
        <div className='SellPost'>
        <h2>{post.getPost()?.getTitle()}</h2>
        <div className='content'>
            {post.getPost()?.getContent()}
        </div>
        <div className='type'>
            商品类型:{GetType(post.getGoodsType())}
        </div>
        <div className='price'>
            价格:{post.getPrice()}
        </div>
        <div className='contact'>
            联系方式:{post.getContact()}
        </div>
        <div className='onSold'>
            {post.getSold()?'正在出售':'已售出'}
        </div>
        <div className='Comments'>
            <h2>评论区</h2>
            {comments.map((comment) => {
                return <div key={comment.getId()} >
                    {comment.getContent()}
                    {<button onClick={()=>{
                        DeleteComment(id,comment.getId(),client,user.getId())
                        setGetPost(true);
                    }}>删除评论</button>}
                    </div>
            })}
        </div>    
        </div>

        <div className='createComment'> 
            <div className='inputContent'>
                <input
                    type='text'
                    placeholder='发条友善的评论吧'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
        <button onClick={()=>{
            Submit(id,content,client,uid)
            setGetPost(true);
        }}>确认</button>
      </div>
        </div>
}
export default ShowFoodPost;