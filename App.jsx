import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from './components/SignUp';
import Shopping from './components/Shopping';
import WishlistPage from './components/WishlistPage';

const App = () => {
  return (
    <div>
    <BrowserRouter>
     <Routes>
     <Route exact path="/" element={<SignUp />}></Route>
      <Route exact path="/shopping" element={<Shopping/>}/>
      <Route exact path="/wishlistpage" element={<WishlistPage/>}/>
     </Routes>
    </BrowserRouter> 
    </div>
  )
  }

export default App;