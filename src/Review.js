import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

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
    </article>
  );
};

export default Review;

// first setup a hook with a default value of zero because the value is an array and to showcase the first person you start with index zero
// now how can you access each individual or properties?
// meaning you only want to render one person
// you can access the properties using destructuring from the people array and specify which item you are looking for
// you can use the state value to do so
// destructuring the array and equal it to the array which holds the state value so whoever you choose will showcase those properties
