import { useState } from "react";
import { ChangeIconRequest, ChangeUsernameRequest, GetUserRequest, User } from "../../proto/auth_pb";
import { AuthClient } from "../../proto/AuthServiceClientPb";
import { ForumClient } from "../../proto/ForumServiceClientPb";
import { changeImg } from "../../functions/post";
import { useNavigate } from "react-router-dom";
import './user.css'
const client = new ForumClient("http://localhost:8080");
const auth = new AuthClient('http://localhost:8080');

const UserInf=()=>{
    
    const [showChangeName,setShowChangeName]=useState(false);
    const [showChangeImg,setShowChangeImg]=useState(false);
    const [newName,setNewName]=useState("");
    const [img,setImg]=useState("");
    const [icon,setIcon]=useState("");
    const navagate = useNavigate();
    const [user,setUser]=useState<User>(new User());
    const uid = JSON.parse(localStorage.getItem('uid')!);
    const [get,setGet]=useState(true);

    const getUser=()=>{
        const request = new GetUserRequest();
        request.setUserId(uid);
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

    const changeName=()=>{
        const request=new ChangeUsernameRequest();
        request.setNewName(newName);
        request.setUserId(uid);
        auth.changeUsername(request,{},(err,response)=>{
            if(err){
                console.log(err);
            }else{
                if(response.getSuccess()){
                    setNewName("");
                    setGet(true);
                }else{
                    alert("用户名重复！")
                }
            }
        })
    }
    const changeIcon=()=>{
        const request=new ChangeIconRequest();
        request.setNewIcon(new TextEncoder().encode(img));
        // console.log(img);
        // console.log(request.getNewIcon());
        request.setUserId(uid);
        auth.changeIcon(request,{},(err,response)=>{
            if(err){
                console.log(err);
            }
            else{
                setGet(true);
            }
        })
    }

    if(get){
        getUser();
        //setShowChangeImg(false);
        //setShowChangeName(false);
        setGet(false);
    }

    return <div className="userInf">
         <div className="personalInf">
            <div className='userIcon'>
        <img src={icon} className='icon' alt='图片'   
        onClick={()=>{setShowChangeImg(true)}} height='100'  width='100' />
        {(showChangeImg) && <div className='changeImg'>
            <input type="file"   accept="image/*"
               onChange={(e) => {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        setImg((e.target?.result as string).split(',')[1]); // base64
                    }
                    reader.readAsDataURL(e.target.files![0]);
                }
                }
                />
            {(img !== "") &&<img onClick={()=>{setImg("");}} src={changeImg(img)} alt="img"  height="100" />}
            <button onClick={()=>{changeIcon(); setShowChangeImg(false); console.log(icon)}}>确定</button>
            <button onClick={()=>{setShowChangeImg(false);setImg("")}}>关闭</button>
        </div>}
        </div>
        <div className='name'>
        {user.getUsername()!}
        <span className='showName' onClick={()=>{setShowChangeName(true)}}> ✍ </span>
            {showChangeName && <div className='changeName'>
                <input 
                    type = 'text'
                    value = {newName}
                    placeholder="输入新昵称"
                    onChange={(e)=>{setNewName(e.target.value);}}
                />
                <button className="confirmChangeName" onClick={()=>{changeName();setShowChangeName(false)}}>确定</button>
                <button className="closeChangeName" onClick={()=>{setShowChangeName(false)}}>关闭</button>

                </div>}
        </div>
            
            
        </div>
        <div className="personalPost">
            <button className="myFavor" onClick={()=>{localStorage.setItem('type', JSON.stringify(1));navagate('/home')}}>我收藏的</button>
            <button className="myOwn" onClick={()=>{localStorage.setItem('type', JSON.stringify(2));navagate('/home')}}>我发布的</button>
            {/* <button className='myTakePart' onClick={()=>{localStorage.setItem('type', JSON.stringify(3));navagate('/home')}}>我参加的</button> */}
            <button className="unLogin" onClick={()=>{navagate('/')}}>退出登录</button>
        </div>
    </div>
}

 export default UserInf;