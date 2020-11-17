import React from "react";
import get from "lodash.get";
import ListingCards from "../listing_cards";
import Locate from "../../icons/locate";
import MapPin from "../../icons/map-pin";
import DeliveryIcon from "../../icons/delivery";
import DispensaryIcon from "../../icons/dispensary";
import DoctorIcon from "../../icons/doctor";
import Footer from "../footer";
import Header from "../header";
import {
  AppWrapper,
  AppContent,
  Center,
  Container,
  Row,
  ListingGroups,
  HeroSection,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton,
  IconContainer,
} from "../styles";
import { GlobalContext, EMPTY } from "../../context";

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

const Home = () => {
  const values = React.useContext(GlobalContext);
  if (values === EMPTY) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  }
  const { location, isLocating, error, regions, locate } = values;

  function locateMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        locate(position.coords);
      });
    }
  }

  function getLabel(listings: any, label: string) {
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
      case "dispensary": return <DispensaryIcon fill={"#484848"}/>
      case "delivery": return <DeliveryIcon fill={"#484848"}/>
      case "doctor": return <DoctorIcon fill={"#484848"}/>
    }
  }

  return (
    <AppWrapper>
      <Header />
      <HeroSection>
        <ContentContainer>
          <LocationSection>
            <h2>
              <MapPin fill={"#7e7979"} width={"60px"} height={"40px"} />
              <span> {location ? location.name : ""} </span>
              <span> {isLocating && !location ? "...locating" : ""} </span>
            </h2>
            <LocateButton onClick={locateMe}>
              <IconContainer>
                <Locate fill={"#7e7979"} />
              </IconContainer>
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
      <Footer 
        position={!('city' in values.location)  ? 'absolute' : 'relative'} 
        height={!('city' in values.location) ? '4.2rem' : '15rem'}
      />
    </AppWrapper>
  )
}

export default Home;