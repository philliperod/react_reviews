import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const previousPerson = () => {
    setIndex((index) => {
      let oldIndex = index - 1;
      return oldIndex;
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={previousPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn">Surprise Me</button>
    </article>
  );
};

export default Review;

// creating functions for the button to shift through the cards left and right
// in those functions we would want to call the state function setIndex
// the parameter for the state function will be the index because you want to access the current state value
// and whatever you return will be the new current state value (store in new variable and add one)
//
