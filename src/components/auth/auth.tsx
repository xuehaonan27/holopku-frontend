import { useState } from "react";
import { LoginProvider, LoginRequest, User } from "../../proto/auth_pb";
import { AuthClient } from "../../proto/AuthServiceClientPb";

const client = new AuthClient("http://localhost:8080", null, null);

const AuthService = ({ onLoginSuccess }: { onLoginSuccess: (token: string | Uint8Array) => void }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState<string | undefined | null>(null);

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
          onLoginSuccess(response.getToken());
        }
      }
    });
  };

  return (
    <div className="auth-service">
      <button onClick={handleLoginClick}>Login</button>
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
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

export default AuthService;