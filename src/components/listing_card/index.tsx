import React from "react";
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
`;

const InfoContainer = styled.div`
  margin-left: 1em;
  text-align: left;
`
const Name = styled.div`
  font-weight: bold;
  font-size: 1.1em;
`
const City = styled.div`
  font-size: .8em;
  color: #a4a2a2;
`

const ListingCard = ({ listing }: { listing: any }) => {
  console.log('listing', listing)
  return (
    <CardWrapper>
      <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
      <InfoContainer>
        <City> {listing.city} | {Math.ceil(listing.distance)}mi</City>
        <Name> {listing.name} </Name>
        <Rating rating={listing.rating} />
      </InfoContainer>
    </CardWrapper>
  )
};

export default ListingCard;
