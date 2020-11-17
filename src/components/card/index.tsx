import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import logo from "../../assets/logo.png";
import Avatar from "../avatar";
import get from "lodash.get";
import Rating from "../rating";
import {
  AppHeader
} from "../styles";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`
const MainContainer = styled.div`
  height: 20rem;
  width: 100%;
  border: 1px solid black;
`

const Card = (props: any) => {
  console.log('props', props.location.state)
  const listing = props.location.state.listing
  //rating
  //avatar image
  //best_of_weedmaps
  //distance
  //name
  //online ordering
  //reviews count
  //retailer_services
  //slug
  //city
  //type
  //static map url
  return (
    <Container>
      <AppHeader>
        <img src={logo} alt="weedmaps logo" />
      </AppHeader>
      <MainContainer>
        <Avatar img={`${get(listing, "avatar_image.small_url")}`} width={"10rem"} height={"10rem"} />
        <div>
          <Rating rating={listing.rating} width={"6rem"} height={"1.15rem"}/>
        </div>
      </MainContainer>
      {/* <div>{props.location.state.listing.rating}</div> */}
      <Link to="/" style={{textDecoration: 'none'}}>Back</Link>
    </Container>
  )
}

export default withRouter(Card);