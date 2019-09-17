import React from 'react'
import Landingpage from './Landingpage';
import Skills from './Skills/Skills';
import Aboutme from './AboutMe/Aboutme';
import Contact from './Contact';
import Projects from './Projects';
import {Switch, Route } from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path = "/home" component={Landingpage}></Route>
        <Route path = "/skills" component={Skills}></Route>
        <Route path = "/aboutme" component={Aboutme}></Route>
        <Route path = "/contact" component={Contact}></Route>
        <Route path = "/projects" component={Projects}></Route>
    </Switch>
)

export default Main;