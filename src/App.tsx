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
          <Route path="/register" element={<Register />} />
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


export default App;
