import React, { useState } from 'react';
import './TextSlider.css';
import quote from '../../../assets/images/toppng.com-coffee-icon-decal-601x600.png'
function TextSlider() {

  const words = [
    { id: 0, value: "Good Coffee – Cheaper than Prozac!" },
    { id: 1, value: "Coffee is a way of stealing time which should by rights belong to your older self." },
    { id: 2, value: "No one can understand the truth until he drinks of coffee’s frothy goodness." },
    { id: 3, value: "To an old man a cup of coffee is like the door post of an old house — it sustains and strengthens him." },
    { id: 4, value: "People say money can’t buy happiness. They Lie. Money buys Coffee, Coffee makes Me Happy!" },
  ];
  const [wordData, setWordData] = useState(words[0].value)
  const handleClick = (index) => {
    const wordSlider = words[index].value;
    setWordData(wordSlider)
  }
  return (
    <>
      <div className="main">
        <div className="quote">
          <img src={quote} alt='quote'></img>
        </div>
        <div className='text'>" {wordData} "</div>
        <div className='flex_row'>
          {words.map((data, i) =>
            <h1 key={i} onClick={() => handleClick(i)}><div className='dot'></div></h1>
          )}
        </div>
      </div>
    </>
  );
}

export default TextSlider;