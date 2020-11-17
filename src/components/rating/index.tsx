import React from 'react';
import styled from "styled-components";

interface IFilledProps {
  fill: number,
}

interface IStarsProps {
  width: string,
  height: string,
}

const Stars = styled.div<IStarsProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  display: flex;
  direction: row;
`;

const Unfilled = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ccc;
  position: absolute;
`;

const Filled = styled.div<IFilledProps>`
  position: absolute;
  width: ${(props) => `${props.fill}%`};
  height: 100%;
  background-color: #05c5c0;
`;

const Star = styled.div`
  height: 100%;
  width: 20%;
  position: relative;
  clip-path: polygon(50% 0%, 64% 32%, 98% 35%, 71% 59%, 79% 91%, 50% 73%, 21% 91%, 29% 57%, 2% 35%, 36% 32%);
  margin-right:.1em;
`;

const Rating = ({rating, width, height}: {rating: number, width: string, height: string}) => {
  const starFilled = (starRating: any) => {
    const stars = [0, 1, 2, 3, 4];

    const filled = stars.map((star, index) => {
      let fill;

      if (starRating > star + 1) {
        fill = 100;
      } else if (starRating > star) {
        fill = (starRating - star) * 100;
      } else {
        fill = 0;
      };

      return (
        <Star key={index}>
          <Unfilled />
          <Filled fill={fill} />
        </Star> 
      );
    });

    return filled;
  };

  return (
    <Stars width={width} height={height}>
      {starFilled(rating)}
    </Stars>
  );
};

export default Rating;