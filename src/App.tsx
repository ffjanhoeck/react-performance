import React from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import {AnonymousView} from './views/anonymous/AnonymousView';
import {HomeView} from './views/home/HomeView';
import {RenderFunctionView} from './views/renderFunction/RenderFunctionView';

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={HomeView}/>
                <Route exact path='/anonymous' component={AnonymousView}/>
                <Route exact path='/render-function' component={RenderFunctionView}/>
            </Switch>
        </HashRouter>
    );
}

export default App;
