import  '../../proto/forum_pb';
import { useState } from 'react';
import { ForumClient } from '../../proto/ForumServiceClientPb';
import { AmusementPost,GameType } from '../../proto/amusementPost_pb'; 
import { Post, PostType} from '../../proto/post_pb';
import { CreateAmusementPostRequest,ListAmusementPostsRequest, ListPersonalPostsRequest, ListRequestType} from '../../proto/forum_pb';
import { changeImg, DeletePost, initPost} from '../../functions/post';
import { useNavigate } from 'react-router-dom';
import './amusePostList.css'
const client = new ForumClient('http://localhost:8080');

const AmusementList = () => {
    const AmusementPosts: AmusementPost[] = [];
    const[showCreate,setShowCreate] = useState(false);
    const[title,setTitle] = useState('');
    const [amusePosts, setAmusePosts] = useState(AmusementPosts);
    const[content,setContent] = useState('');
    const [gameType,setGameType]=useState(GameType.OTHER);
    const [type1,setType1]=useState('OTHER');
    const [optType,setOptType]=useState('ALL');
    const [startTime,setStartTime]=useState('');
    const [contact,setContact]=useState('');
    const [people,setPeople]=useState(0);
    const [peopleAlready,setPeopleAlready]=useState(0);
    const [place,setPlace]=useState('');
    const [getPost,setGetPost]=useState(true);
    const [imgList,setImgList]=useState<string[]>([]);
    const [upbond,setUpbond]=useState(100);
    const navigate = useNavigate();
    const token = JSON.parse(localStorage.getItem('token')!);
    const uid=JSON.parse(localStorage.getItem('uid')!);
    const type=JSON.parse(localStorage.getItem('type')!);

    const GetType=(type:string)=>{
        switch(type){
            case 'WolfKill':
                return GameType.WOLFKILL;
            case 'JvBen':
                return GameType.JVBEN;
            case 'BloodTower':
                return GameType.BLOODTOWER;
            case 'Karaok':
                return GameType.KARAOK;
            case 'BoardGame':
                return GameType.BOARDGAME;
            case 'Sports':
                return GameType.SPORTS;
            case 'Riding':
                return GameType.RIDING;
            case 'OTHER':
                return GameType.OTHER;
            default:
                return GameType.OTHER;
    }

}
    const Navigate = (id:number) => {
                navigate(`/amuse/${id}`, { state: { id: id } });
    }
    
    const initAmusePost =({amusementPost,post,peopleAll,peopleAlready,type,startTime,place,contact}:
        {amusementPost:AmusementPost,post:Post,peopleAll:number,peopleAlready:number,type:GameType,startTime:number,place:string,contact:string})=>{
        amusementPost.setPost(post);
        amusementPost.setAmusePlace(place);
        amusementPost.setPeopleAll(peopleAll);
        amusementPost.setPeopleAlready(peopleAlready);
        amusementPost.setGameType(type);
        amusementPost.setStartTime(startTime);
        amusementPost.setContact(contact);
    }
    
    const GetPost=()=>{
        if(type===0){
            const request = new ListAmusementPostsRequest();
            request.setNumber(10);
            request.setPeopleAllUpbound(upbond);
            request.setPeopleAllLowbound(0);
            request.setPeopleDiffUpbound(upbond);
            if(optType!=="ALL"){
                request.setGameType(GetType(optType));
            }
            client.listAmusementPosts(request, {}, (err, response) => {
                if (err) {
                    console.log(err);
                } else {
                    setAmusePosts(response.getPostsList());
                }
            });
        } else{
            const request=new ListPersonalPostsRequest();
            switch(type){
                case 1: request.setType(ListRequestType.STAR);break;
                case 2: request.setType(ListRequestType.OWN);break;
                case 3: request.setType(ListRequestType.TAKEPART);break;
                default: request.setType(ListRequestType.OWN);break;
            }
            request.setUserId(uid);
            request.setPostType(PostType.FOODPOST);
            request.setNumber(10);
            client.listPersonalPosts(request,{},(err,response)=>{
                if(err){
                    console.log(err);
                }else{
                        setAmusePosts(response.getAresponse()!.getPostsList());
                }
                }
            )
            }
    }

    const Submit = () => {
        if(title===""||content===""){
            alert("标题或内容不能为空");
            return;
        }
        const post=new Post();
        initPost({post:post,id:0,title:title,user_id:uid,content:content,created_at:0,image:imgList});
        const amusePost=new AmusementPost();
        initAmusePost({amusementPost:amusePost,post:post,peopleAll:people,peopleAlready:peopleAlready,type:gameType,startTime:Date.parse(startTime),place:place,contact:contact});
        const request=new CreateAmusementPostRequest();
        request.setPost(amusePost);
        client.createAmusementPost(request,{},(err,response) => {
            if(err){
                console.log(err);
            }else{
                console.log(response.getSuccess());
                setGetPost(true);
                setContent("");
                setTitle ("");
                setPeople(0);
                setPeopleAlready(0);
                setPlace('');
                setStartTime('');
                setContact('');
                setImgList([]);
            }
        });
    }

    if(getPost){
        //getUser();
        console.log(getPost);
        setTimeout(GetPost,100);
        setGetPost(false);
    }

    return <div className='AmuseList'>
        <div className="opt">
            <span className="lowbond">人数上限</span>
                    <input type="number" placeholder="人数上限" value={upbond} onChange={
                        (e)=>{setUpbond(parseInt(e.target.value))}}/>
                <span className="GameType"> 游戏类型</span>
            <select value={optType} onChange={(e) => {
                setOptType(e.target.value);      
            }}>
                <option value='WolfKill'>狼人杀</option>
                <option value='JvBen'>剧本杀</option>
                <option value='BloodTower'>血染钟楼</option>
                <option value='Karaok'>卡拉OK</option>
                <option value='BoardGame'>桌游</option>
                <option value='Sports'>运动</option>
                <option value='Riding'>骑行</option>
                <option value='OTHER'>其他</option>
            <option value="ALL">不限</option>
            </select>
            <button onClick={()=>{setGetPost(true)}}>确认</button>
        </div>
        <div className="FoodPosts">
        {amusePosts.map((amusePost) => {
            return <div key={amusePost.getPost()?.getId()} onClick={() => Navigate(amusePost.getPost()?.getId()!)}>
                <h2>{amusePost.getPost()?.getTitle()}</h2>
                <div className="content">
                    <p>{amusePost.getPost()?.getContent()}</p>
                <p className="like">点赞数:{amusePost.getPost()!.getLikes()}</p>
                <p className="favor">收藏数:{amusePost.getPost()!.getFavorates()}</p> 
            </div>
                </div>
        })}
        </div>

        {type ===0 &&<button className="createButton" onClick={()=>setShowCreate(true)}>发布新帖子</button>}

        {showCreate &&(<div className="create">
            <div className="title">
                <input
                    type="text"
                    placeholder="输入标题"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="gameType">
                请选择游戏类型
            <select value={type1} onChange={(e) => {
                setType1(e.target.value);
                setGameType(GetType(e.target.value));
            }}>
                <option value='WolfKill'>狼人杀</option>
                <option value='JvBen'>剧本杀</option>
                <option value='BloodTower'>血染钟楼</option>
                <option value='Karaok'>卡拉OK</option>
                <option value='BoardGame'>桌游</option>
                <option value='Sports'>运动</option>
                <option value='Riding'>骑行</option>
                <option value='OTHER'>其他</option>
            </select>
            </div>

            <div className='place'>
                <input
                    type='text'
                    placeholder='输入地点'
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
            </div>

            <div className='gamePeople'>
            <span>总人数</span>
            <input
                    type='number'
                    placeholder='输入总人数'
                    value={people}
                    onChange={(e) => setPeople(parseInt(e.target.value))}
                />
                <span>已有人数</span>
                <input
                    type='number'
                    placeholder='输入已有人数'
                    value={peopleAlready}
                    onChange={(e) => setPeopleAlready(parseInt(e.target.value))}
                />
            </div>
            
            <div className='time'>
                <input
                    type='text'
                    placeholder='输入开始时间'
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>

            <div className='contact'>
                <input
                    type='text'
                    placeholder='联系方式'
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </div>

            <div className="content">
            <textarea
    placeholder="输入内容"
    value={content}
    onChange={(e) => setContent(e.target.value)}
    rows={4} /* 初始行数 */
  />
            </div>
            <div className="img">
                上传图片
                <input type="file" style={{ display: "上传图片" }}  accept="image/*"
               multiple onChange={(e) => {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        setImgList([...imgList, (e.target?.result as string).split(',')[1]]); // base64
                    }
                    reader.readAsDataURL(e.target.files![0]);
                }
                }
                />
            {imgList.map((img) => {
                    return <img onClick={()=>{
                        setImgList(imgList.filter((img1)=>img1!==img));
                    }} 
                    src={changeImg(img)} alt="img"  height="100" />
                })
            }
                </div>
            <div className="buttons">
            <button  className="submit" onClick={()=>{Submit();setShowCreate(false)}}>确认</button>
            <button className="close" onClick={()=>setShowCreate(false)}>关闭</button>
            </div>
        
      </div>)}
      <button className="return" onClick={()=>{localStorage.setItem("type",JSON.stringify(0));navigate("/home")}}>返回首页</button>
        </div>
    
}

export default AmusementList;