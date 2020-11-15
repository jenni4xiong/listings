import React from 'react';
import styled from "styled-components";

interface IProps {
  fill: number
}

const Stars = styled.div`
  width: 80.016px;
  height: 15px;
  position: relative;
  display: flex;
  direction: row;
`;

const Star = styled.div`
  height: 100%;
  width: 20%;
  position: relative;
  clip-path: polygon(50% 0%, 64% 32%, 98% 35%, 71% 59%, 79% 91%, 50% 73%, 21% 91%, 29% 57%, 2% 35%, 36% 32%);
  margin-right:.1em;
`;

const Unfilled = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ccc;
  position: absolute;
`;

const Filled = styled.div<IProps>`
  position: absolute;
  width: ${(props) => `${props.fill}%`};
  height: 100%;
  background-color: #00ced6;
`;


const Rating = ({rating}: {rating: number}) => {
  const starFilled = (starRating: any) => {
    const stars = [0, 1, 2, 3, 4];

    const filled = stars.map((star) => {
      let fill;
      if (starRating > star + 1) {
        fill = 100;
      } else if (starRating > star) {
        fill = (starRating - star) * 100;
      } else {
        fill = 0;
      }
      return (
        <Star>
          <Unfilled />
          <Filled fill={fill} />
        </Star> 
      );
    });
    return filled;
  }
  return (
    <Stars>
      {starFilled(rating)}
    </Stars>
  )
}

export default Rating;