import  "../../proto/forum_pb";
import { useState } from "react";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { AmusementPost,GameType } from "../../proto/amusementPost_pb"; 
import { Post} from "../../proto/post_pb";
import { CreateAmusementPostRequest,ListAmusementPostsRequest} from "../../proto/forum_pb";
import { DeletePost, initPost} from "../../functions/post";
import { useNavigate } from "react-router-dom";
const client = new ForumClient("http://localhost:8080");

const AmusementList = ({token}:{token:string | Uint8Array}) => {
    const AmusementPosts: AmusementPost[] = [];
    const[showCreate,setShowCreate] = useState(false);
    const[title,setTitle] = useState("");
    const [amusementPosts, setAmusementPosts] = useState(AmusementPosts);
    const[content,setContent] = useState("");
    const [type,setType]=useState(GameType.OTHER);
    const [type1,setType1]=useState("");
    const [startTime,setStartTime]=useState("");
    const [contact,setContact]=useState("");
    const [people,setPeople]=useState("");
    const [peopleAlready,setPeopleAlready]=useState("");
    const [place,setPlace]=useState("");
    const [getPost,setGetPost]=useState(true);
    const navigate = useNavigate();

    const GetType=(type:string)=>{
        switch(type){
            case "WolfKill":
                return GameType.WOLFKILL;
            case "JvBen":
                return GameType.JVBEN;
            case "BloodTower":
                return GameType.BLOODTOWER;
            case "Karaok":
                return GameType.KARAOK;
            case "BoardGame":
                return GameType.BOARDGAME;
            case "Sports":
                return GameType.SPORTS;
            case "Riding":
                return GameType.RIDING;
            case "OTHER":
                return GameType.OTHER;
            default:
                return GameType.OTHER;
    }

}
    const Navigate = (id:number) => {
                navigate(`/amuse/${id}`, { state: { id: id } });
    }
    
    const initAmusementPost =({amusementPost,post,peopleAll,peopleAlready,type,startTime,place,contact}:
        {amusementPost:AmusementPost,post:Post,peopleAll:number,peopleAlready:number,type:GameType,startTime:number,place:string,contact:string})=>{
        amusementPost.setPost(post);
        amusementPost.setPlace(place);
        amusementPost.setPeopleAll(peopleAll);
        amusementPost.setPeopleAlready(peopleAlready);
        amusementPost.setType(type);
        amusementPost.setTime(startTime);
        amusementPost.setContact(contact);
    }
    

    const GetPost=()=>{
        const request = new ListAmusementPostsRequest();
        request.setPeopleAllLowbound(0);
        request.setPeopleAllUpbound(100);
        request.setPeopleDiffUpbound(100);
        request.setNumber(5);
        
        client.listAmusementPosts(request, {}, (err, response) => {
            if (err) {
                console.log(err);
            } else {
                setAmusementPosts(response.getPostsList());
            }
        });
    
    }

    const Submit = () => {
        const post=new Post();
        initPost({post:post,id:0,title:title,user_id:1,content:content,created_at:0,image:[]});
        const amusementPost=new AmusementPost();
        initAmusementPost({amusementPost:amusementPost,post:post,place:place,contact:contact,
            peopleAll:Number(people),peopleAlready:Number(peopleAlready),type:type,startTime:parseInt(startTime)});
        const request=new CreateAmusementPostRequest();
        request.setPost(amusementPost);
        client.createAmusementPost(request,{},(err,response) => {
            if(err){
                console.log(err);
            }else{
                console.log(response.getSuccess());
                setGetPost(true);

            }
        });
    }

    if(getPost){
        GetPost();
        setGetPost(false);
    }


    return <div>
        <div className="AmusementPosts">
        {amusementPosts.map((amusePost) => {
            return <div key={amusePost.getPost()!.getId()}>
                <div key={amusePost.getPost()?.getId()} onClick={() => Navigate(amusePost.getPost()?.getId()!)}>
                <h2>{amusePost.getPost()?.getTitle()}</h2>
                <div className="content">
                    <p>{amusePost.getPost()?.getContent()}</p>
                <p className="like">点赞数:{amusePost.getPost()!.getLikes()}</p>
                <p className="favor">收藏数:{amusePost.getPost()!.getFavorates()}</p> 
                </div>
            </div>
            <button className="delete" onClick={()=>{
                DeletePost(amusePost.getPost()?.getId()!,client);
                setGetPost(true);
            }}>删除帖子</button>
                </div>
        })}
        </div>

        <button onClick={()=>setShowCreate(true)}>发布新帖子</button>
        {showCreate &&(<div className="create">
            
            <div className="title">
                <input
                    type="text"
                    placeholder="输入标题"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="type">
                请选择活动类型
            <select value={type1} onChange={(e) => {
                setType1(e.target.value);
                setType(GetType(e.target.value));
            }}>
                <option value="WolfKill">狼人杀</option>
                <option value="JvBen">剧本杀</option>
                <option value="BloodTower">不知道是什么</option>
                <option value="Karaok">不知道是什么</option>
                <option value="BoardGame">桌游</option>
                <option value="Sports">运动</option>
                <option value="Riding">骑行</option>
                <option value="OTHER">其他</option>
            </select>
            </div>
            <div className="place">
                <input
                    type="text"
                    placeholder="输入地点"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
            </div>
            <div className="peopleAll">
                <input
                    type="text"
                    placeholder="输入总人数"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                />
            </div>
            <div className="peopleAlreay">
                <input
                    type="text"
                    placeholder="输入已有人数"
                    value={peopleAlready}
                    onChange={(e) => setPeopleAlready(e.target.value)}
                />
            </div>
            <div className="time">
                <input
                    type="text"
                    placeholder="输入开始时间"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                />
            </div>
            <div className="contact">
                <input
                    type="text"
                    placeholder="联系方式"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                />
            </div>
            <div className="content">
            <textarea
                placeholder="输入内容"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={4} />
            </div>
            
        <button onClick={Submit}>确认</button>
        <button onClick={()=>setShowCreate(false)}>关闭</button>
      </div>)}
    </div>
    
}

export default AmusementList;