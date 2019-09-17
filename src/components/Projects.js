import React, {Component} from "react";
import {Tabs, Tab, Grid, Cell, Card, CardActions, CardMenu, CardText, CardTitle, IconButton, Button} from 'react-mdl'

class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
           activeTab : 0 
        }
    }
    toggleCategories = () => {
    
        if(this.state.activeTab === 0){
            return (
            <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-media-1.freecodecamp.org/images/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>React js Project</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored> Github</Button>
                <Button colored><a href="https://murmuring-cove-94796.herokuapp.com/" target='_blank'>Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>
        )
        }
       else if(this.state.activeTab === 1){
            return (  <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.auth0.com/blog/jsleaks/logo.png) center / cover'}}>Javascript Project</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored><a href="https://murmuring-cove-94796.herokuapp.com/" target='_blank'>Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>)
        }
        else{
            return (  <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2016/12/developing-chatbot-for-2017-benefits.jpg) center / cover'}}>Chatbot Project</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
        </Card>)
        }
    }
    render(){
        return (
            <div className="category-tab">
               <Tabs activeTab={this.state.activeTab}
               onChange = {(tabId) => this.setState({activeTab: tabId})} ripple>
                   <Tab>React js</Tab>
                   <Tab>Javascript / Node js</Tab>
                   <Tab>Chatbots</Tab>
               </Tabs>
               <section className="projects-grid">
                   <Grid className="projects-grid">
                       <Cell col={12}>
                           <div className="content">{this.toggleCategories()}</div>
                       </Cell>
                   </Grid>
                   
               </section>
            </div>
        )
         
    }
}

export default Projects




