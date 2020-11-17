import styled from "styled-components";

interface IFooterProps {
  position: string;
}

interface IBlackBarProps {
  height: string;
}

export const AppHeader = styled.div`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  color: #fff;

  img {
    width: 110px;
    height: 25px;
  }
`;

export const AppWrapper = styled.div`
  margin-bottom: 0px;
  text-align: center;
  color: #484848;
  font-family: Helvetica Neue, Helvetica, Roboto, Arial, sans-serif;
`;

export const AppContent = styled.div`
  max-width: 1200px;
  margin-bottom: 10px auto;
`;

export const ListingGroups = styled.div`
  margin-top: 5px;
  h2 {
    text-align: left;
  }
  width: 100%;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  background-color: #f1f3f2;
  display: flex;
  flex-direction: row;
  justify-content:center;
`

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 60vw;
  max-width: 95vw;
  margin: auto;
`

export const HeroSection = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #e5e4e4;
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: #a4a2a2;
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const Image = styled.img`
  width: 1.5rem;
  height: 1.3rem;
  margin-right: .5rem;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
`;

export const LocationSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 80px;
`;

export const TextContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  text-align: left;
  color: #a4a2a2;
  line-height: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const LocateButton = styled.a`
  width: 105px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid #c2baba;
  color: #7e7979;
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;

  svg {
    margin-right: 5px;
  }
`;

export const TealBar = styled.div`
  height: 2rem;
  background-color: #05c5c0;
`
export const BlackBar = styled.div<IBlackBarProps>`
  background-color:#222;
  height: ${(props) => props.height};
  overflow: auto;
`

export const FooterContainer = styled.div<IFooterProps>`
  bottom: 0px;
  position: ${(props) => props.position}; 
  width: 100%;
`

export const Img = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-right: .3rem;
`

export const IconContainer = styled.span`
  width: 1.5rem;
  margin-right: .4rem;
`