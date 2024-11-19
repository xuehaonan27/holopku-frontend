import React from 'react';
import './StarRating.css'; // 引入CSS文件


const StarRating=({score}:{score:number}) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const filled = i < score;
    stars.push(
      <span key={i} className={`star ${filled ? 'filled' : 'empty'}`} aria-label={`star ${filled ? 'filled' : 'empty'}`}>
        {filled ? '★' : '☆'}
      </span>
    );
  }

  return <span className="rating">{stars}</span>;
};

export default StarRating;