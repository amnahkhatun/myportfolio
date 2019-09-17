import React, {Component} from "react";
import {Grid, Cell} from 'react-mdl';
import amnah from '../components/images/amnah.jpg';
import ExampleComponent from "react-rounded-image";
import Fade from 'react-reveal/Fade';
// import groupWalk from '../media/group-walk.svg';
import CustomIcon from './CustomIcon'



class Landingpage extends Component {
    render(){
        return (
            <div className='main-class' style={{width : '100%', margin : 'auto'}}>
               <Grid className="landing-grid">
                   <Cell col={12}>
                    
                       <Fade top>
                       <div className="pic">
                       <ExampleComponent className="image-crop"
          image={amnah}
          roundedSize="0"
          imageWidth="190"
          imageHeight="190"
        />
        </div>
        </Fade>
        <Fade bottom>
                       <div className="banner-text">
                           <h1>Amnah Khatun</h1>
                           <h3>Full stack web developer</h3>
                           <hr/>
                           <p>HTML/CSS | Bootstrap | React js | JavaScript | Node js | Java</p>
                           <div className="social-links">
                               {/* LinkedIn */}
                               <a
                                   href="https://www.linkedin.com/in/akhatun" target="_blank" rel="noopener noreferrer">
                                       <i className="fab fa-linkedin-square" aria-hidden="true"/>
                               </a>
                                 {/* Github */}
                                 <a
                                   href="https://github.com/amnahkhatun" target="_blank" rel="noopener noreferrer">
                                       <i className="fab fa-github-square" aria-hidden="true"/>
                               </a>
                                 {/* Hacherrank */}
                                 <a
                                   href="https://www.hackerrank.com/amna_khatun1605 " target="_blank" rel="noopener noreferrer">  
                                       <i className="fab fa-hackerrank" aria-hidden="true"></i>
                               </a>
                                  {/* Twitter */}
                                  <a
                                   href="https://twitter.com/KhatunAmnah" target="_blank" rel="noopener noreferrer">  
                                       <i className="fab fa-twitter-square" aria-hidden="true"></i>
                               </a>
                                  {/* Stack overflow */}
                                  <a
                                   href="https://stackoverflow.com/amnah-khatun" target="_blank" rel="noopener noreferrer">  
                                       <i className="fab fa-stack-overflow" aria-hidden="true"></i>
                               </a>
                           </div>
                           {/* <div>
                <CustomIcon icon={groupWalk}/>
                </div> */}
                           </div>
                       
                           </Fade>
                   </Cell>
                   <div className="contact-info" >
                   <div className="">Write me on:</div><b>amnah.khatun@gmail.com</b>
                <br/>
            
               
                <span className="">I also have skype :</span>  <span style={{display:"inline-block"}}><i className="fab fa-skype"></i><b> amnah.khatun</b></span>
                <footer>Created with <i className="fas fa-heart" aria-hidden="true"></i></footer>
                </div>
                
               </Grid>
               
            
            
              
            </div>
        )
         
    }
}

export default Landingpage