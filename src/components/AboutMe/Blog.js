import React from 'react';
import Swiper from 'react-id-swiper';
import amnah from '../images/amnah.jpg';


export default function SimpleContainer() {
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

<p>Chatbot: the Next Big Thing</p>
<img
  src="https://miro.medium.com/max/700/0*oz2e-hQtsHOWzoB4."
  alt="avatar"
  className="avatar-img"
  />
  <p>
  <a href="https://chatbotsmagazine.com/chatbot-the-next-big-thing-512b292303a4" target="_blank" rel="noopener noreferrer">Read it here</a> 
  </p>
</div>

      <div> 
          <p>Something you need to know about Neural Network
</p>
          <img
                       src="https://miro.medium.com/max/700/0*OadxDIRS7T7GHchZ."
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p>
                       <a href="https://chatbotsmagazine.com/something-you-need-to-know-about-neural-network-2de9fd4e1ced" target="_blank" rel="noopener noreferrer">Read it here</a> 
                       </p>
                     </div>
                     <div>
                     <p>Let’s know Supervised and Unsupervised in an easy way</p>
          <img
                       src="https://miro.medium.com/max/700/0*-yj4yWcSyQSxzpkX"
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p>
                       <a href="https://chatbotsmagazine.com/lets-know-supervised-and-unsupervised-in-an-easy-way-9168363e06ab" target="_blank" rel="noopener noreferrer">Read it here</a> 
                       </p>
                     </div>
                     <div>

                     <p>Conversational Interface- The New Era of Computing</p>
          <img
                       src="https://miro.medium.com/max/1600/0*XLQHLROuQ4G0tq4K."
                       alt="avatar"
                       className="avatar-img"
                       />
                       <p>
                       <a href="https://chatbotsmagazine.com/conversational-interface-the-new-era-of-computing-cdffd0b72b0c" target="_blank" rel="noopener noreferrer">Read it here</a> 
                       </p>
                     </div>
                     <div>

<p>Things to do after creating your chatbot</p>
<img
  src="https://miro.medium.com/max/1600/0*UfTPO8znq7mT8MM8."
  alt="avatar"
  className="avatar-img"
  />
  <p>
  <a href="https://chatbotsmagazine.com/things-to-do-after-creating-your-chatbot-97cb2affdb71" target="_blank" rel="noopener noreferrer">Read it here</a> 
  </p>
</div>
<div>

<p>Why Chatbots Need NLP</p>
<img
  src="https://miro.medium.com/max/700/0*thjDgxVASwKR6X9H."
  alt="avatar"
  className="avatar-img"
  />
  <p>
  <a href="https://chatbotsmagazine.com/why-chatbots-need-nlp-7ec6ec11e4f4" target="_blank" rel="noopener noreferrer">Read it here</a> 
  </p>
</div>

     
    </Swiper>
  )
}

