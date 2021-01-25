import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import {AnonymousView} from './views/anonymous/AnonymousView';
import {HomeView} from './views/home/HomeView';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={HomeView}/>
        <Route exact path='/anonymous' component={AnonymousView}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
