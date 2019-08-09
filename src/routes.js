import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';

export default (
    <Switch>
        <Route exact to='/' component={Home} />
        <Route to='/contact' component={Contact} />
    </Switch>
)