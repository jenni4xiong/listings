import React from 'react'
import {
  FooterContainer, 
  TealBar,
  BlackBar,
} from "../styles";

const Footer = ({position, height}: {position: string, height: string}) => {
  return (
    <FooterContainer position={position}>
        <TealBar></TealBar>
        <BlackBar height={height}></BlackBar>
    </FooterContainer>
  )
}

export default Footer