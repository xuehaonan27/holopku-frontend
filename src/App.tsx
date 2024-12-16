import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import AuthService from './components/auth/auth';
import HelloService from './components/hello/hello';
import ForumService from './components/forum/forum';
import ShowFoodPost from './components/foodPost/foodPost';
import FoodList from './components/foodPostList/foodPostList';
import SellList from './components/sellPostList/sellPostList';
import ShowSellPost from './components/sellPost/sellPost';
import ShowAmusementPost from './components/amusePost/amusePost';
import AmusementList from './components/amusepostList/amusePostList';
import Register from './components/Register/Register';
import UserInf from './components/user/user';
import { User } from './proto/auth_pb';
import ShowForum from './components/forum/forum';

function App() {
  const [token, setToken] = useState<string | Uint8Array | null>(null);
  const placeholdUser=new User();
  const [user,setUser]=useState<User>(placeholdUser);
  const handleLoginSuccess = (token: string | Uint8Array,user:User) => {
    // const navigate = useNavigate();
    setToken(token);
    setUser(user);
    localStorage.setItem('token', JSON.stringify(token));
    localStorage.setItem('uid', JSON.stringify(user.getId()));
    localStorage.setItem('type', JSON.stringify(0));
    console.log(user);
    alert('Logged in with token: ' + token);
  };

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthService onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test/hello" element={<HelloService />} />
          <Route path="/home" element={<ShowForum />} />
          <Route path="/food" element={<FoodList /> } />
          <Route path="/food/:index" element={<ShowFoodPost /> } />
          <Route path="/sell" element={<SellList/> } />
          <Route path="/sell/:index" element={<ShowSellPost /> } />
          <Route path="/amuse" element={<AmusementList token={token!}/> } />
          <Route path="/amuse/:index" element={<ShowAmusementPost /> } />
          <Route path="/user" element={<UserInf /> } />


        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
