import React from 'react';
import Swiper from 'react-id-swiper';
import amnah from '../images/amnah.jpg';
import pic1 from '../images/pic1.JPG';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.JPG';
import pic5 from '../images/pic5.JPG';
import pic6 from '../images/pic6.jpg';
import pic7 from '../images/pic7.jpg';
import pic8 from '../images/pic8.JPG';
import pic9 from '../images/pic9.JPG';
import pic10 from '../images/pic10.JPG';
import pic11 from '../images/pic11.JPG';
import pic12 from '../images/pic12.JPG';
import pic13 from '../images/pic13.JPG';
import pic14 from '../images/pic14.JPG';
import pic15 from '../images/pic15.JPG';
import pic16 from '../images/pic16.JPG';
import pic17 from '../images/pic17.JPG';
import pic18 from '../images/pic18.jpg';
import pic19 from '../images/pic19.JPG';
import pic20 from '../images/pic20.JPG';

 
const SimpleSwiperWithParams = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }
 
  return(
    <Swiper {...params}>
    
     
      <div>
        <p>Here are some of my Collections !!</p> <img
                       src={pic3}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
      <div>
        <p></p> <img
                       src={pic4}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic5}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic6}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic7}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic8}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic9}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic10}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic11}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic12}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic13}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic14}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic15}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic16}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic17}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                       <div>
        <p></p> <img
                       src={pic18}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
                    
                       <div>
        <p></p> <img
                       src={pic20}
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p></p><p></p></div>
    </Swiper>
  )
}
 
export default SimpleSwiperWithParams;