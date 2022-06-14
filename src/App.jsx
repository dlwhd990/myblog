import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ArticleView from "./components/ArticleView/ArticleView";
import Header from "./components/Header/Header";
import LatestAndHotPage from "./components/LatestAndHotPage/LatestAndHotPage";
import Mainpage from "./components/Mainpage/Mainpage";

const App = (props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/lnh" element={<LatestAndHotPage />} />
        <Route path="/" element={<Mainpage />} />
        <Route path="/article" element={<ArticleView />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
