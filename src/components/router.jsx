import React from 'react';
import { Route, Switch} from 'react-router-dom';
import Comment from './Comment';
import App from './App';
import Hello from './Hello';
import Heroes from './Heroes';
import HooksEg from './HooksEg';
import SuperHero from './SuperHero';
import HooksAssignment from './HooksAssignment';

export default function(){
    return(
        <Switch>
            <Route path="/" exact component={App}/>
            <Route path="/controller" component={Comment}/>
            <Route path="/hello" component={Hello}/>
            <Route path='/heroes' component={Heroes} />
            <Route path='/hooks' component={HooksEg} />
            <Route path='/super' component={SuperHero} />
            <Route path='/assignment' component={HooksAssignment} />

        </Switch>
    );
}