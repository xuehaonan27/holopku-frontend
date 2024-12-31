import { useState } from 'react';
import { LoginProvider, LoginRequest, User } from '../../proto/auth_pb';
import { AuthClient } from '../../proto/AuthServiceClientPb';
import { useNavigate } from 'react-router-dom';
import { myHash } from '../../functions/comment';
import './auth.css';

const client = new AuthClient('http://localhost:8080', null, null);

//返回一个提供登录/注册功能的组件
const AuthService = ({ onLoginSuccess }: { onLoginSuccess: (token: string | Uint8Array,user:User) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<string | undefined | null>(null);
  const navigate = useNavigate();

  const handleSubmit = () => {
    const request = new LoginRequest();
    request.setUsername(username);
    request.setPassword(myHash(password));
    request.setAuthProvider(LoginProvider.PASSWORD);

    client.login(request, {}, (err, response) => {
      if (err) {
        setLoginStatus('Login failed: ' + err.message);
      } else {
        setLoginStatus('Login success!');
        if (response.getSuccess()) {
          onLoginSuccess(response.getToken(),response.getUser()!);
          navigate('/home');
          console.log(response.getUser()?.getId());   
        }
      }
    });
  };

  return (
    <div className='authService'>
        <div>
          <h2>Holopku</h2>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='options'>
          <button className='login' onClick={handleSubmit}>确认</button>
          <button className='register' onClick={()=>{navigate('/register')}}>注册</button>
          </div>
          
        </div>

      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

export default AuthService;