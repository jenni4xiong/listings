import React from "react";
import styled from "styled-components";

const ImgWrapper = styled.div<{ width: string; height: string }>`
  img {
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: cover;
    @media (max-width:375px) {
      width: 6rem;
      height: 6rem;
    };
  };
`;

const Avatar = (
  {
    img,
    width,
    height,
  }: {
    img: string;
    width?: string;
    height?: string;
  } = {
    img: ""
  }
) => (
  <ImgWrapper width={width || "70px"} height={height || "70px"}>
    <img src={img} alt="listing img" />
  </ImgWrapper>
);

export default Avatar;
