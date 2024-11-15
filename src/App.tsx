import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

import { AuthClient } from './proto/AuthServiceClientPb';
import { ForumClient } from './proto/ForumServiceClientPb';
import { LoginProvider, LoginRequest, RegisterRequest, User } from './proto/auth_pb';
import AuthService from './components/auth/auth';
import HelloService from './components/hello/hello';
import ForumService from './components/forum/forum';
import ShowFoodPost from './components/foodPost/foodPost';
import FoodList from './components/foodPostList/foodPostList';
import SellList from './components/sellPostList/sellPostList';
import ShowSellPost from './components/sellPost/sellPost';
import ShowAmusementPost from './components/amusePost/amusePost';
import AmusementList from './components/amusepostList/amusePostList';

function App() {
  const [token, setToken] = useState<string | Uint8Array | null>(null);
  const handleLoginSuccess = (token: string | Uint8Array) => {
    // const navigate = useNavigate();
    setToken(token);
    alert('Logged in with token: ' + token);
  };

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthService onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/test/hello" element={<HelloService />} />
          <Route path="/home" element={<ForumService token={token!} />} />
          <Route path="/food" element={<FoodList token={token!}/> } />
          <Route path="/food/:index" element={<ShowFoodPost token={token!}/> } />
          <Route path="/sell" element={<SellList token={token!}/> } />
          <Route path="/sell/:index" element={<ShowSellPost token={token!}/> } />
          <Route path="/amuse" element={<AmusementList token={token!}/> } />
          <Route path="/amuse/:index" element={<ShowAmusementPost token={token!}/> } />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

// function App() {
//   let server_addr = "http://[::1]:8080";

//   const auth_client = new AuthClient(server_addr, null, null);

//   let [users, setUsers] = useState<(User | undefined)[]>([]);

//   useEffect(() => {
//     let req = new RegisterRequest();
//     req.setAuthProvider(LoginProvider.PASSWORD);
//     req.setUsername("Alice");
//     req.setEmail("alice@example.com");
//     req.setPassword("mypassword");
//     auth_client.register(req, {}, (err, response) => {
//       if (err != null) {
//         alert("Got error when registering: " + err.message);
//         return;
//       }
//       if (response != null) {
//         alert("Got response: " + response);
//       } else {
//         return;
//       }
//     });
//   }, [auth_client]);

//   useEffect(() => {
//     let req = new LoginRequest();
//     req.setAuthProvider(LoginProvider.PASSWORD);
//     req.setUsername("Alice");
//     req.setIaaaToken("");
//     req.setIpAddress("");
//     req.setPassword("mypassword");
//     auth_client.login(req, {}, (err, response) => {
//       if (err != null) {
//         alert("Got error when login: " + err);
//         return;
//       }
//       if (response != null) {
//         alert("Got response: " + response);
//       } else {
//         return;
//       }
//       let users = [];
//       users.push(response.getUser());
//       setUsers(users)
//     });
//   }, [auth_client]);

//   return (
//     <div className="App">
//       {users.map((user) => (
//         <div className="User">
//           <h2>{user?.getId()}</h2>
//           <h2>{user?.getEmail()}</h2>
//           <h2>{user?.getLoginProvider()}</h2>
//         </div>
//       ))}
//     </div>
//   );

//   /* return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   ); */
// }

export default App;
