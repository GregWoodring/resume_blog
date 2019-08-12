import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import ResumeDownload from './components/ResumeDownload/ResumeDownload';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
        <Route path='/download' component={ResumeDownload} />
    </Switch>
)