import { useState } from "react";
import { LoginProvider, LoginRequest, User } from "../../proto/auth_pb";
import { AuthClient } from "../../proto/AuthServiceClientPb";
import { useNavigate } from "react-router-dom";
//import "./auth.css";

const client = new AuthClient("http://localhost:8080", null, null);

const AuthService = ({ onLoginSuccess }: { onLoginSuccess: (token: string | Uint8Array) => void }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<string | undefined | null>(null);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSubmit = () => {
    const request = new LoginRequest();
    request.setUsername(username);
    request.setPassword(password);
    request.setAuthProvider(LoginProvider.PASSWORD);

    client.login(request, {}, (err, response) => {
      if (err) {
        setLoginStatus("Login failed: " + err.message);
      } else {
        setLoginStatus("Login success!");
        if (response.getSuccess()) {
          navigate('/forum');
          onLoginSuccess(response.getToken());
          
        }
        
      }
    });
  };

  const handleSubmitTest = () => {
    onLoginSuccess("test token");
    navigate('/forum');
  }

  return (
    <div className="auth-service">
      <button className="pushable" onClick={handleLoginClick}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front"> Login </span>
      </button>
      {showLogin && (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <button onClick={handleSubmit}>Submit</button> */}
          <button onClick={handleSubmitTest}>Submit</button>
        </div>
      )}
        {/* <input
            id="usernameInput"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <input
            id="passwordInput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <button className="submit" onClick={handleSubmit}>
          <span className="shadow"></span>
          <span className="edge"></span>
          <span className="front"> 确  认</span>
      </button> */}
          
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

export default AuthService;