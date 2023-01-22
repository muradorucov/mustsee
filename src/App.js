import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';

import './reset.css';
import './common.css';
import { NotFound } from './pages/NotFound';


const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/list/:id" element={<ListPage />} />
        <Route path="*" element={< NotFound />} />
      </Routes>
    </div>
  )
}

export default App


