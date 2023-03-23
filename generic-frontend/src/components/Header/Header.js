import React from 'react';
import styled from 'styled-components';
import Logo from './phoenix.png'

function Header() {
  return (
    <HeaderContainer>
        <HeaderLogoContainer>
            <WebLogo src={Logo}></WebLogo>
        </HeaderLogoContainer>
        <H1>A Generic Frontend</H1>
    </HeaderContainer>
  )
}

export default Header;

const HeaderContainer = styled.div`
  height: 80px;
  display: flex;
  text-align: center;
  align-items: center;
`
const HeaderLogoContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     /* width: 100%; */
     flex: .1;
     :hover{
          cursor: pointer;
     }
`

const WebLogo = styled.img`
     height:70px !important;
     
`
const H1 = styled.h1`
    font-size: 50px;
    color: white;
    text-shadow: 
    black 0px 0px 5px, 
    #FFF 0px 0px 10px, 
    #FFF 0px 0px 15px, 
    #FFF 0px 0px 20px, 
    #FFF 0px 0px 30px, 
    #FFF 0px 0px 40px; 
`