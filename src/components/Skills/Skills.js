import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import skillsData from "./skillsData";
import Rating from '@material-ui/lab/Rating';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);


const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

  function getLabelText(value) {
    return `${value} Heart${value !== 1 ? 's' : ''}`;
  }
  
 function SkillsComponent(props) {
   const rating = props.id;
   console.log(rating, 'here')
    const classes = useStyles();
  
    return (
      <div className="skill-cards ">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
           {props.skills}
           {/* <Rating name="half-rating" value={3.5} precision={0.5} /> */}
           {/* <Progress
  percent={props.percentage}
/> */}
 <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Custom icon and color</Typography>
        <StyledRating
          name="customized-color"
          value={3.5}
          getLabelText={getLabelText}
          precision={0.5}
          icon={<FavoriteIcon fontSize="inherit" />}
        />
      </Box>
            </Typography>
          
          </CardContent>
        </CardActionArea>
        <CardActions>
          
        </CardActions>
      </Card>
      </div>
    );
  }

  function Skills() {
    const skillComponents = skillsData.map(skill => <SkillsComponent key={skill.id} image={skill.image} skills={skill.skills} />)
    
    return (
        <div className="skill-grid ">
            {skillComponents}            
        </div>
    )
}
export default Skills





//new



// import React, { Component } from "react";
// //import "./styles.scss";
// //import testimonislas from "../../../assets/media/images/testimonislas.svg";
// import starYellow from "./yellow-star.svg";
// import CustomIcon from "../CustomIcon";
// //import LandingButtons from "../LandingButtons/LandingButtons";
// import groupWalk from "./group-walk.svg";
// import {
//  CarouselProvider,
//  Slider,
//  Slide,
//  ButtonBack,
//  ButtonNext
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";
 
// class LandingPageBlog extends Component {
//  constructor(props) {
//    super(props);
//    this.state = {
//      blogContent: [
//        {
//          message:
//            " Getting a job was easy I really was hoping to get a call back from my dream employer, and i am happy to say they hired me!",
//          name: "Indra Godrej, Business Head",
//          rating: [
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow }
//          ]
//        },
//        {
//          message:
//            " I really was hoping to get a call back from my dream employer, and i am happy to say they hired me!",
//          name: "Saina Dutt, Digital Media Manager",
//          rating: [
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow }
//          ]
//        },
//        {
//          message:
//            " I really was hoping to get a call back from my dream employer, and i am happy to say they hired me!",
//          name: "Sheejal Shah, User Experience Designer",
//          rating: [
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow }
//          ]
//        },
//        {
//          message:
//            " I really was hoping to get a call back from my dream employer, and i am happy to say they hired me!",
//          name: "Neha Dubey, Business Development Executive",
//          rating: [
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow }
//          ]
//        },
//        {
//          message:
//            " I really was hoping to get a call back from my dream employer, and i am happy to say they hired me!",
//          name: "Isha Kochchar, Fashion Designer",
//          rating: [
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow }
//          ]
//        },
//        {
//          message:
//            " I really was hoping to get a call back from my dream employer, and i am happy to say they hired me!",
//          name: "Kanika Chhabra, Branch Manager",
//          rating: [
//            { icon: starYellow },
//            { icon: starYellow },
//            { icon: starYellow }
//          ]
//        }
//      ]
//    };
//  }
//  backButtonClick = () => {
//    this.backButton.instance.handleOnClick();
//  };
//  nextButtonClick = () => {
//    console.log("nextprops", this.nextButton);
//    this.nextButton.instance.handleOnClick();
//  };
//  render() {
//    const { blogContent } = this.state;
//    return (
//      <div className="landing-page-blog-main-container">
//        <div className="landing-page-blog-1st-icon">
//          <CustomIcon
//           // icon={testimonislas}
//            iconStyle="footer-testimonislas-icon"
//          />
//        </div>
//        <div className="landing-page-blog-post-text-wrapper">
//          <div className="landing-page-blog-post-text-title">
//            What They’re Saying
//          </div>
//          <CarouselProvider
//            naturalSlideWidth={315}
//            naturalSlideHeight={80}
//            totalSlides={blogContent.length}
//            dragStep={1}
//            step={1}
//            visibleSlides={1}
//          >
//            <Slider>
//              <div style={{ display: "flex", flexDirection: "row" }}>
//                {blogContent.map((blog, i) => (
//                  <Slide index={i}>
//                    <div>
//                      <div className="landing-page-blog-post-star-icon">
//                        {blog.rating.map((star, i) => (
//                          <CustomIcon
//                            iconStyle="footer-starYellow-icon"
//                            icon={star.icon}
//                          />
//                        ))}
//                      </div>
//                      <div className="landing-page-blog-post-text-paragraph">
//                        {blog.message}
//                      </div>
//                      <div className="blog-author">{blog.name}</div>
//                    </div>
//                  </Slide>
//                ))}
//              </div>
//            </Slider>
 
//            <div className="landing-page-blog-post-buttons">
//              <ButtonBack
//                ref={backButton => {
//                  this.backButton = backButton;
//                }}
//                style={{ visibility: "hidden", padding: "unset" }}
//              >
//                Back
//              </ButtonBack>
//              <ButtonNext
//                ref={nextButton => {
//                  this.nextButton = nextButton;
//                }}
//                style={{ visibility: "hidden", padding: "unset" }}
//              >
//                Next
//              </ButtonNext>
//              {/* <LandingButtons
//                buttonType={"floating-default-btn"}
//                onClick={this.backButtonClick}
//              /> */}
//              {/* <LandingButtons
//                className="landing-page-blog-post-button"
//                buttonType={"floating-solid-btn"}
//                onClick={this.nextButtonClick}
//              /> */}
//            </div>
//          </CarouselProvider>
//        </div>
//        <div className="landing-page-blog-2st-icon">
//          <CustomIcon icon={groupWalk} iconStyle="footer-testimonislas-icon" />
//        </div>
//      </div>
//    );
//  }
// }
 
// export default LandingPageBlog;
