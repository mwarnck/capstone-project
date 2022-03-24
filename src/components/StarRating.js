import styled from 'styled-components';
import { useState } from 'react';

export default function StarRating({ rating, saveRatingToDrink, id }) {
  const [hover, setHover] = useState(0);

  return (
    <RatingContainer>
      <SubHeading>Rate this drink:</SubHeading>
      <StarWrapper>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <StarRatingButton
              type="button"
              key={index}
              rating={rating}
              hover={hover}
              index={index}
              onClick={() => saveRatingToDrink(index, id)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span>&#9733;</span>
            </StarRatingButton>
          );
        })}
      </StarWrapper>
    </RatingContainer>
  );
}

const RatingContainer = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 15px;
  min-width: 220px;
  max-width: 70%;
`;

const SubHeading = styled.h3`
  font-weight: bold;
  color: var(--font-color-headlines-bright);
`;

const StarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StarRatingButton = styled.button`
  background-color: transparent;
  font-size: 1.5rem;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props =>
    props.index <= (props.hover || props.rating)
      ? 'var(--bg-color-bookmark)'
      : 'var(--bg-color-secondary)'};
`;
