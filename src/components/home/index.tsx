import React from "react";
import Header from "../header";
import ListingCards from "../listing_cards";
import Footer from "../footer";
import Locate from "../../icons/locate";
import MapPin from "../../icons/map-pin";
import DeliveryIcon from "../../icons/delivery";
import DispensaryIcon from "../../icons/dispensary";
import DoctorIcon from "../../icons/doctor";
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
import get from "lodash.get";
import { GlobalContext, EMPTY } from "../../context";

type RetailerType = "delivery" | "dispensary" | "doctor";

const regionTypes: RetailerType[] = ["dispensary", "delivery", "doctor"];
const regionLabels: {
  dispensary: string;
  delivery: string;
  doctor: string;
} = {
  dispensary: "Dispensary Storefronts",
  delivery: "Delivery Services",
  doctor: "Doctors"
};

const Home = () => {
  const values = React.useContext(GlobalContext);

  if (values === EMPTY) {
    throw new Error("Component must be wrapped with <Container.Provider>");
  };

  const { location, isLocating, error, regions, locate } = values;

  const locateMe = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        locate(position.coords);
      });
    };
  };

  const getLabel = (listings: {}, label: string) => {
    if (get(listings, "listings").length) {
      return (
        <div key={label}>
          <strong> {label} </strong>
        </div>
      );
    };
    return <div />;
  };

  const renderSwitch = (regionType: string) => {
    const fillColor = "#484848"
    switch (regionType) {
      case "dispensary": return <DispensaryIcon fill={fillColor}/>
      case "delivery": return <DeliveryIcon fill={fillColor}/>
      case "doctor": return <DoctorIcon fill={fillColor}/>
    };
  };

  const fillColor = "#7e7979";

  return (
    <AppWrapper>
      <Header />
      <HeroSection>
        <ContentContainer>
          <LocationSection>
            <h2>
              <MapPin fill={fillColor} width={"60px"} height={"40px"} />
              <span> {location ? location.name : ""} </span>
              <span> {isLocating && !location ? "...locating" : ""} </span>
            </h2>
            <LocateButton onClick={locateMe}>
              <IconContainer>
                <Locate fill={fillColor} />
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
  );
};

export default Home;