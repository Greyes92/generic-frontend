import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <DivContainer>
        <CardDiv>Stuff</CardDiv>
        <CardDiv>Stuff</CardDiv>
        <CardDiv>Stuff</CardDiv>
        <CardDiv>Stuff</CardDiv>
        <CardDiv>Stuff</CardDiv>
        <CardDiv>Stuff</CardDiv>
        <CardDiv>Stuff</CardDiv>
        <CardDiv>Stuff</CardDiv>
      </DivContainer>

    </div>
  );
}

export default App;

const DivContainer = styled.div`
 margin-top: 20px;
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
`

const CardDiv = styled.div`
  width: 500px;
  height: 100px;
  align-self: center;
  background-color: white;
  margin: 10px;
  border-radius: 10px;
  opacity: .75;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.9);
  align-items: center;
  justify-content: center;
  text-align: center;
`