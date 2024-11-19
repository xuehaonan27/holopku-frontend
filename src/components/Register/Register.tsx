import { useState } from "react";
import { AuthClient } from "../../proto/AuthServiceClientPb";
import { LoginProvider, RegisterRequest } from "../../proto/auth_pb";
import { useNavigate } from "react-router-dom";
import "./Register.css";
const client = new AuthClient("http://localhost:8080", null, null);
const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password1, setPassword1] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const Submit=()=>{
        if(username==""){
            alert("用户名不能为空");
            return;
        }
        if(password==""){
            alert("密码不能为空");
            return;
        }
        const request = new RegisterRequest();
        request.setUsername(username);
        if(password!=password1){
            alert("两次密码不一致");
            return;
        }
        request.setPassword(password);
        request.setEmail(email);
        request.setAuthProvider(LoginProvider.PASSWORD);
        client.register(request, {}, (err, response) => {
            if (err) {
                alert("用户名已存在");
            } else {
                navigate('/');
            }
        });
    }
    return <div className="registerService">
        <div>
            <h2>注册</h2>
        <input
                    type="text"
                    placeholder="输入用户名"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
        <input
                    type="password"
                    placeholder="输入密码"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
        <input
                    type="password"
                    placeholder="确认密码"
                    value={password1}
                    onChange={(e) => setPassword1(e.target.value)}
                />
        <input
                    type="text"
                    placeholder="输入邮箱"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="confirm" onClick={Submit}>确认</button>
        </div>

    </div>

}

export default Register;