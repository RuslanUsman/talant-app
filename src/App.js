import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from './MainMenu';
import Instinct from './Instinct';
import Intellect from './Intellect';
import Fight from './Fight';
import PriceList from './PriceList';
import TalantApp from './TalantApp';
import './App.css';



function App() {
  return (
    <Router>
      
        <Routes>
          <Route path="/talant-app" element={<TalantApp />} />
          <Route path="/" element={<MainMenu />} />
          <Route path="/instinct" element={<Instinct />} />
          <Route path="/intellect" element={<Intellect />} />
          <Route path="/fight" element={<Fight />} />
          <Route path="/pricelist" element={<PriceList />} />
        </Routes>
     
    </Router>
  );
}

export default App;
