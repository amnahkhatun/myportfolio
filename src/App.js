import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Drawer, Navigation, Content} from "react-mdl";
import Main from './components/main.js'
import {Link} from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-class" title="" scroll>
            <Navigation style={{marginLeft: '34rem'}} >
                <Link to="/home">Home</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/skills">Skills</Link>
                
                <Link to="/projects">Projects</Link>
                {/* <Link to="/contact">Contact</Link> */}
            </Navigation>
        </Header>
      
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
  }
}

export default App;
