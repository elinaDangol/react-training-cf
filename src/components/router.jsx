import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Controller from './Controller';
import App from './App';
import Hello from './Hello';
import Heroes from './Heroes';

export default function(){
    return(
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/controller" component={Controller}/>
            <Route path="/hello" component={Hello}/>
            <Route path='/heroes' component={Heroes} />
        </Switch>
    );
}