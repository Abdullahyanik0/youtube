import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from './App';
import Video from "./pages/Video"


ReactDOM.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />}>
      <Route path="video" element={<Video/>}/>
      </Route>
    </Routes>
</BrowserRouter>,
  document.getElementById('root')
);

