import React from "react";
import {Link} from "react-router-dom";
import Avatar from "../avatar";
import styled from "styled-components";
import get from "lodash.get";
import Rating from "../rating";

const CardWrapper = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: white;
  border: 0.0625rem solid rgb(230, 229, 229);
  box-shadow: .05rem .05rem .1rem lightgray;
  min-height: 5.3rem;
`;

const InfoContainer = styled.div`
  margin-left: 1em;
  text-align: left;
`
const Name = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  margin-top: .15rem;
  margin-bottom: .3rem;
  color: #484848;
`
const City = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #a4a2a2;
`

const ListingCard = ({ listing }: { listing: any }) => {
  const location = {
    pathname:"/card", 
    state: {message: "hello, I'm a passed message"}
  }
  return (
    <Link 
      to={location}
      style={{textDecoration: 'none'}}
    >
      <CardWrapper>
        <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        <InfoContainer>
          <City> {listing.city} | {Math.ceil(listing.distance)}mi</City>
          <Name> {listing.name} </Name>
          <Rating rating={listing.rating} />
        </InfoContainer>
      </CardWrapper>
    </Link>
  )
};

export default ListingCard;
