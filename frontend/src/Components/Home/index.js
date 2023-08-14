import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.scss';

function Home() {
  const [items, setItems] = useState([]);
  const handleCreateShareable = async () => {
      try {
          const response = await axios.post('http://localhost:8000/home/create_shareable/', {
              title: "Some Title"  // Or whatever data you want to send
          });
          const slug = response.data.slug;
          const shareableURL = `localhost:8000/${slug}`;
          console.log("Shareable URL:", shareableURL);
      } catch (error) {
          console.error("Error creating shareable:", error);
      }
  }
  


  function getElement(elementSelector) {
    return document.querySelector(elementSelector);
  }
  
  function bubbleAnimations(event) {
    const bubbleOne = getElement('.bubble-one');
    const bubbleTwo = getElement('.bubble-two');
    const bubbleThree = getElement('.bubble-three');
    const bubbleFour = getElement('.bubble-four');
  
    let cursorPositionX = event.clientX;
    let cursorPositionY = event.clientY;
  
    function animateBubble(positionX, positionXType, positionY, positionYType) {
      return `translate(${positionXType}${Math.round(
        positionX / Math.PI
      )}px, ${positionYType}${Math.round(positionY / Math.PI)}px`;
    }
  
    bubbleOne.style.transform = animateBubble(
      cursorPositionX,
      '',
      cursorPositionY,
      ''
    );
    bubbleTwo.style.transform = animateBubble(
      cursorPositionY,
      '',
      cursorPositionX,
      ''
    );
    bubbleThree.style.transform = animateBubble(
      cursorPositionY,
      '',
      cursorPositionY,
      '-'
    );
    bubbleFour.style.transform = animateBubble(
      cursorPositionX,
      '-',
      cursorPositionY,
      ''
    );
  }
  
  document.addEventListener('mousemove', (event) => {
    bubbleAnimations(event);
  });


return (
  <body>
    <main>
      <div class="banner">
        <div class="bubble-one"></div>
        <div class="bubble-two"></div>
        <div class="bubble-three"></div>
        <div class="bubble-four"></div>
        <button className="centered-text" onClick={handleCreateShareable}>Get Started</button>
      </div>
    </main>
  </body>
);
}

export default Home;
