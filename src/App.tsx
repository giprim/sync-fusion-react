import React from 'react';
import logo from './logo.svg';
// import { G } from '@syncfusion/ej2-react-grids';
import './App.css';
import Scheduler from './Scheduler';
import Grid from './Grid';

function App() {
  return (
    <div className='container'>
      <div>
        <Scheduler />
      </div>
      <div>
        <Grid />
      </div>
    </div>
  );
}

export default App;
