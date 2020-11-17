import React from 'react';
import {withRouter, RouteComponentProps} from 'react-router';
import styled from 'styled-components';
import Avatar from "../avatar";
import Header from "../header";
import Rating from "../rating";
import Footer from "../footer";
import get from "lodash.get";

interface IListings {
  name: String,
  city: String, 
  state: String,
  distance: number,
  type: String, 
  reviews_count: number,
  rating: number,
}
interface IProps {
  location: {
    state: {listing: IListings}
  };
};

const Container = styled.div`
  height: 100vh;
  border-bottom: 10px solid #222;
`
const MainContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
`
const InfoContainer = styled.div`
  height: 10rem;
  display:flex;
  flex-direction: column;
  justify-content:space-around;
  color: #222;
  margin-left: 1rem;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const Img = styled.img`
  width: 21rem;
  margin: auto;
  @media (max-width: 330px) {
    width: 19rem;
  }
`
const Name = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`
const Button = styled.button`
  height: 2.5rem;
  width: 6rem;
  border-radius:5px;
  border: .3px solid lightgray;
  background-color: white;
  font-size:.7rem;
  @media (max-width: 400px) {
    height: 2rem;
  }
`
const Space = styled.div`
  width: 1rem;
`
const SmallFont = styled.div`
  font-size: 1rem;
  @media (max-width: 350px) {
    font-size: .8rem;
  }
`
const Center = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin: center;
  @media (max-width: 500px) {
    width: 100vw;
  }
`

const Card = ({location}: IProps & RouteComponentProps) => {
  const listing = location.state.listing
  return (
    <Container>
      <Header />
      <Center>
        <MainContainer>
          <Avatar img={`${get(listing, "avatar_image.small_url")}`} width={"8.5rem"} height={"8.5rem"} />
          <InfoContainer>
            <Name>{listing.name}</Name>
            <SmallFont>
              {listing.city}, {listing.state}
              {' | '}
              {Math.floor(listing.distance * 10) / 10}mi
            </SmallFont>
            <Row>
              <SmallFont>{`${listing.type[0].toUpperCase()}${listing.type.slice(1)}`}</SmallFont>
              <Space></Space>
              <Button>
                (510)-931-3644
              </Button>
            </Row>
            <Row>
              <Rating rating={listing.rating} width={"6rem"} height={"1.15rem"}/>
              <div>
                ({listing.reviews_count})
              </div>
            </Row>
          </InfoContainer>
        </MainContainer>
        <Img src="blm.png" alt="blm"/>
      </Center>
      <Footer height={"4.3rem"} position={"absolute"}/>
    </Container>
  );
};

export default withRouter(Card);