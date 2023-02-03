import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPageDetail from "./pages/ListPageDetail/ListPageDetail"
import { NotFound } from './pages/NotFound';
import { ListPage } from './pages/ListsPage/ListPage';
import { MovieDetail } from './pages/MovieDetail';

import './reset.css';
import './common.css';



const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lists" element={<ListPage />} />
        <Route path="/listdetail/:id" element={<ListPageDetail />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={< NotFound />} />
      </Routes>
    </div>
  )
}

export default App


