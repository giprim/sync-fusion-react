import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path='/'>
        <Layout />
      </Route>
    </Switch>
  );
}

export default App;
