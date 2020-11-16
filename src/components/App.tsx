import React from "react";
import get from "lodash.get";
import logo from "../assets/logo.png";
import ListingCards from "./listing_cards";
import Locate from "../icons/locate";
import MapPin from "../icons/map-pin";
import DeliveryIcon from "../icons/delivery"
import DispensaryIcon from "../icons/dispensary"
import DoctorIcon from "../icons/doctor"


import {
  AppHeader,
  AppWrapper,
  AppContent,
  Center,
  Container,
  // Image,
  Row,
  ListingGroups,
  HeroSection,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton,
  TealBar,
  BlackBar,
  Footer,
  Img,
  IconContainer,
} from "./styles"; //styled components
import { GlobalContext, EMPTY } from "../context";
import { stringify } from "querystring";
import Dispensary from "../icons/dispensary";

type RetailerType = "delivery" | "dispensary" | "doctor";
const regionTypes: RetailerType[] = ["dispensary", "delivery", "doctor"];
const regionLabels: {
  delivery: string;
  dispensary: string;
  doctor: string;
} = {
  delivery: "Delivery Services",
  dispensary: "Dispensary Storefronts",
  doctor: "Doctors"
};

function App() {
  //globalContext is from the create context
  const values = React.useContext(GlobalContext);
  // console.log('values:', values)
  if (values === EMPTY) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  }
  const { location, isLocating, error, regions, locate } = values;
  // console.log('locate', locate)

  function locateMe() {
    // console.log('clicked', navigator.geolocation)
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        // console.log('position coords ', position.coords)
        locate(position.coords);
      });
    }
  }

  function getLabel(listings: any, label: string) {
    // console.log('getlabel', listings, label)
    if (get(listings, "listings").length) {
      return (
        <div key={label}>
          <strong> {label} </strong>
        </div>
      );
    }
    return <div />;
  }

  function renderSwitch(regionType: string) {
    switch (regionType) {
      case "dispensary": return <DispensaryIcon/>
      case "delivery": return <DeliveryIcon />
      case "doctor": return <DoctorIcon />
    }
  }
  // console.log('get listings', get(regions['doctor'], "listings"), regions['doctor'])
  return (
    <AppWrapper>
      <AppHeader>
        <img src={logo} alt="weedmaps logo" />
      </AppHeader>
      <HeroSection>
        <ContentContainer>
          <LocationSection>
            <h2>
              <MapPin fill={"#7e7979"} width={"60px"} height={"40px"} />
              <span> {location ? location.name : ""} </span>
              <span> {isLocating && !location ? "...locating" : ""} </span>
            </h2>
            <LocateButton onClick={locateMe}>
              <Locate fill={"#7e7979"} />
              <Img src="locate.png"></Img>
              <span> Locate Me </span>
            </LocateButton>
          </LocationSection>
          <TextContent>
            Lorem Ipsum dolor sit amet, consectetur adispiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aligqua. Ut enim
            ad minim veniam, quis.
          </TextContent>
        </ContentContainer>
      </HeroSection>
      <Container>
        <AppContent>
          <Center>
            {error && error.length && <div> {error} </div>}
            {regions && !!Object.entries(regions).length && (
              <React.Fragment>
                {regionTypes.map((regionType: RetailerType) => {
                  return (
                    <ListingGroups key={regionType}>
                      <Row>
                        {regions[regionType].listings.length > 0 ? 
                          <IconContainer>
                            {renderSwitch(regionType)}
                          </IconContainer>
                          : null
                        }
                        <h2>
                          {getLabel(regions[regionType], regionLabels[regionType])}
                        </h2>
                      </Row>
                      <ListingCards listings={get(regions[regionType], "listings")} />
                    </ListingGroups>
                  )
                })}
              </React.Fragment>
            )}
          </Center>
        </AppContent>
      </Container>
      <Footer position={!('city' in values.location)  ? 'absolute' : 'relative'}>
        <TealBar></TealBar>
        <BlackBar height={!('city' in values.location) ? '4.2rem' : '15rem'}></BlackBar>
      </Footer>
    </AppWrapper>
  );
}

export default App;
