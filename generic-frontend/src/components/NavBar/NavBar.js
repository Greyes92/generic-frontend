import React from 'react'
import styled from 'styled-components';

function NavBar() {
  return (
    <NavBarContainer>
        <Div>GET ALL</Div>
        <Div>GET ONE</Div>
    </NavBarContainer>
  )
}

export default NavBar;

const NavBarContainer = styled.div`
  height: 45px;
  /* background-color: white; */
  display: flex;
  width: 100vw;
  text-align: center;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
  background: linear-gradient(to right, white, gray);
  position: -webkit-sticky;
`

const Div = styled.div`
 margin-left: 20px;
 margin-right: 20px;
 font-size: 18px;
 align-items: center;
 justify-content: center;
`