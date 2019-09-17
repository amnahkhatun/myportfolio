import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import PicSwiper from './PicSwiper';
import Blog from './Blog';
import Fade from 'react-reveal/Fade';



class Aboutme extends Component {
    
    render(){
        return (
            <div className="main-class">
               <Grid className="landing-grid">
                   <Cell col={12}>
                   <div className="greeting-text">
                       <Fade top>
                        <h1><b>Hello, hola, नमस्ते!</b></h1>
                        </Fade>
                           </div>
                           <Fade top>
                           <div className="banner-text">
                               <p>I am currently working as a Software Engineer in an IT company.
                               I am mostly responsible for the frontend work, right now I am using React js to build a job search portal. When I am not working I love to solve coding questions in different websites <i class="fas fa-code"></i>, and when I am not coding you will find me either reading a book, writing blogs or binge-watching tv series <i class="fas fa-grin-hearts"></i>.
                               And yeah I also love traveling and photography!! You can check some of my clicks below.<i class="fas fa-smile-wink"></i>
                               </p>
                           </div>
                           </Fade>
                   </Cell>
                  

                   <Cell col={6}>
                   <Fade bottom>
                       <div className="banner-text">
                   <PicSwiper /> 
                   </div>
                   </Fade>
                   </Cell>
                   
                  

                   <Cell col={6}>
                   <Fade bottom>
                       <div className="banner-text">
                   <Blog/>

                  </div>
                  </Fade></Cell>
                 
               </Grid>
              
            </div>
        )
         
    }
}

export default Aboutme