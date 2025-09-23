import React from 'react';
import Header from './Header/Header';
import About from './About/About';
import Services from './MyServices/Services';
import MyPortfolio from './MyPortfolio/MyPortfolio';
import Contact from './Contact/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PortfolioProvider } from './Context/PortfolioContext'; 
import { Route, Routes } from 'react-router-dom';
import WebDev from './Pages/WebDev/WebDev';
import MobDev from './Pages/MobDev/MobDev';
import DigMrt from './Pages/DigMrt/DigMrt';
import Consult from './Pages/Consult/Consult';

function App() {
  return (
    <PortfolioProvider> 
      <Header />
      <Routes>
        
        <Route path='/' element={
          <>
          <About />
          <Services />
          <MyPortfolio />
          </>
        }/>
        <Route path='/web' element={<WebDev/>}/>
        <Route path='/usx' element={<WebDev/>}/>
        <Route path='/mob' element={<MobDev/>}/>
        <Route path='/dig' element={<DigMrt/>}/>
        <Route path='/con' element={<Consult/>}/>
      </Routes>
      
      <Contact />
    </PortfolioProvider>
  );
}

export default App;

// Bisi4bisi=Goodluck
