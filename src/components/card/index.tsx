import React from 'react';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import Avatar from "../avatar";
import get from "lodash.get";
import Rating from "../rating";
import Footer from "../footer";
import Header from "../header";

const Container = styled.div`
  border-bottom: 1px solid lightgray;
`
const MainContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`
const InfoContainer = styled.div`
  
`

const Img = styled.img`
  width:23rem;
  margin:1.4rem;
`

const Card = (props: any) => {
  console.log('props', props.location.state)
  const listing = props.location.state.listing
  return (
    <Container>
      <Header />
      <MainContainer>
        <Avatar img={`${get(listing, "avatar_image.small_url")}`} width={"10rem"} height={"10rem"} />
        <InfoContainer>
          <div>{listing.name}</div>
          <div>
            <Rating rating={listing.rating} width={"6rem"} height={"1.15rem"}/>
            ({listing.reviews_count})
          </div>
          <div>
            {listing.city}, {listing.state}
            {' | '}
            {Math.floor(listing.distance * 10) / 10}mi
          </div>
          <div>{listing.type}</div>
          <div>{listing.best_of_weedmaps}</div>
        </InfoContainer>
      </MainContainer>
      <Img src="blm.png" alt="blm"/>
      <Footer height={"4.2rem"} position={"absolute"}/>
    </Container>
  )
}

export default withRouter(Card);