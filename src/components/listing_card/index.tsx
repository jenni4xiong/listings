import React from "react";
import Avatar from "../avatar";
import styled from "styled-components";
import get from "lodash.get";

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
`

const ListingCard = ({ listing }: { listing: any }) => (
  <CardWrapper>
    <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
    <InfoContainer>
      <City> {listing.city} </City>
      <Name> {listing.name} </Name>
      {/* <Rating> {listing.rating} </Rating> */}
    </InfoContainer>
  </CardWrapper>
);

export default ListingCard;
