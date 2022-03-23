import styled from 'styled-components';
import { useState } from 'react';

export default function StarRating({ rating, saveRatingToDrink, id }) {
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <StarRatingButton
            type="button"
            key={index}
            rating={rating}
            hover={hover}
            index={index}
            //className={index <= (hover || rating) ? 'on' : 'off'}
            onClick={() => saveRatingToDrink(index, id)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </StarRatingButton>
        );
      })}
    </div>
  );
}

const StarRatingButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props =>
    props.index <= (props.hover || props.rating) ? 'hotpink' : 'yellow'};
`;
