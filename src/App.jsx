import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ArticleView from "./components/ArticleView/ArticleView";
import BlogMain from "./components/BlogMain/BlogMain";
import Header from "./components/Header/Header";
import LatestAndHotPage from "./components/LatestAndHotPage/LatestAndHotPage";
import Login from "./components/Login/Login";
import Mainpage from "./components/Mainpage/Mainpage";
import Signup from "./components/Signup/Signup";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/lnh" element={<LatestAndHotPage />} />
        <Route path="/article" element={<ArticleView />}></Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/:id" element={<BlogMain />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
