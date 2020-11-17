import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';
import styled from 'styled-components';
import logo from "../../assets/logo.png";
import {
  AppHeader
} from "../styles";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
`

const Card = (props: any) => {
  console.log('props', props.location.state)
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
      {/* <div>{props.location.state.listing.rating}</div> */}
      <Link to="/" style={{textDecoration: 'none'}}>Back</Link>
    </Container>
  )
}

export default withRouter(Card);