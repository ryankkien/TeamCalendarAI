import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [items, setItems] = useState([]);

  const handleGetStartedClick = async () => {
    try {
        const response = await axios.post('http://localhost:8000/create_game_session/');
        console.log(response.data);
    } catch (error) {
        console.error("Error creating game session:", error);
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
        <button className="centered-text" onClick={handleGetStartedClick}>Get Started</button>
      </div>
    </main>
  </body>
);
}

export default App;
