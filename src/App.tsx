import React from 'react';
import logo from './logo.svg';
import './App.css';
import Scheduler from './components/Scheduler';
import Grid from './components/Grid';
import SideNav from './components/SideNav';

function App() {
  return (
    <SideNav>
      <div className='container'>
        <div>
          <Scheduler />
        </div>
      </div>
    </SideNav>
  );
}

export default App;
