import React from 'react';
import { useState } from "react"; 
import {RealHandpose} from './components/RealHandpose.js';
import {RealBodypix} from './components/RealBodypix.js';
import {RealObject} from './components/RealObject.js';
import {ImageDetection} from './components/ImageDetection.js';
import {FacialLandmark} from './components/FacialLandmark.js';
import styled from "styled-components";
//import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import {Menu} from './menuBottoni.js';

//theme imports
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./ThemeComponents/globalStyle";
import { lightTheme, darkTheme } from "./ThemeComponents/Themes";
//import  {useDarkMode} from "./ThemeComponents/useDarkMode"

//navbar
import {Navbar, Nav , Container, Offcanvas, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
  } from "react-router-dom";


const SelectButton = styled.button`
  min-width: 100px;
  padding: 5px 5px;
  border: 2px solid transparent;
  background-color: #a6ff4d;
  color: #0a0f22;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px red solid #fff;
  outline: none;
  margin-top: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 260ms ease-in-out;
  &:hover {
    background-color: #ffad33;
    color: #328fa8;
  }
`;

const ThemeButton = styled.button`
  min-width:50px;
  padding:5px 5px;
  border: 2px solid transparent;
  background-color: #cce6ff;
  font-size: 12px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px red solid #fff;
  outline: none;
  margin-top: 1em;
  margin-bottom: 1em;
  cursor: pointer;
  transition: all 260ms ease-in-out;
  &:hover {
    background-color: #99ddff;
    color: #328fa8;
  }
`;

function App() {

const [stateBodypix, setStateBodypix] = useState(false);
const [stateHandpose, setStateHandpose] = useState(false);
const [stateRealObject, setStateRealObject] = useState(false);
const [stateImageDetection, setStateImageDetection] = useState(false);
const [stateFacial, setStateFacial] = useState(false);

//theme consts
const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
//const [theme, themeToggler] = useDarkMode();
//const themeMode = theme === 'light' ? lightTheme : darkTheme;



function set_state_bodypix(){
  setStateHandpose(false);
  setStateRealObject(false);
  setStateImageDetection(false);
  setStateFacial(false);
  setStateBodypix(true);
}

function set_state_handpose(){
  setStateBodypix(false);
  setStateRealObject(false);
  setStateImageDetection(false);
  setStateFacial(false);
  setStateHandpose(true);
}

function set_state_real_object(){
  setStateHandpose(false);
  setStateBodypix(false);
  setStateImageDetection(false);
  setStateFacial(false);
  setStateRealObject(true);
}

function set_state_image_detection(){
  setStateHandpose(false);
  setStateBodypix(false);
  setStateRealObject(false);
  setStateFacial(false);
  setStateImageDetection(true);
}

function set_state_facial(){
  setStateHandpose(false);
  setStateBodypix(false);
  setStateRealObject(false);
  setStateImageDetection(false);
  setStateFacial(true);
}



  return (
    <div class="flex flex-col h-screen justify-between"><ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
          <BrowserRouter >
            <div className="App">
              <>
                <Navbar class="navbarr" bg="light" expand={false}>
                  <Container fluid>
                      <ThemeButton style={{position: 'left'}} onClick={themeToggler} >Switch Theme</ThemeButton>
                      <Navbar.Toggle aria-controls="offcanvasNavbar" />
                      <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                      >
                        <Offcanvas.Header closeButton>
                          <Offcanvas.Title id="offcanvasNavbarLabel">
                            <h2><span className="text-blue-400">M</span>
                            <span className="text-red-600">o</span>
                            <span className="text-yellow-300">d</span>
                            <span className="text-green-500">e</span>
                            <span className="text-orange-500">l</span>
                            <span className="text-blue-600">s</span></h2>
                          </Offcanvas.Title>
                          <ThemeButton onClick={themeToggler} style={{float:'right'}}>Switch Theme</ThemeButton>
                        </Offcanvas.Header>
                        <hr></hr>
                        <Offcanvas.Body>
                          
                          <Nav className="justify-items-center flex-grow-1 pe-3">
                            <Nav.Link as={Link} to="/ImageDetection"> 
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center"
                                }} 
                              >
                                <SelectButton 
                                  disabled={stateImageDetection}
                                  onClick={set_state_image_detection}
                                >
                                  <strong>TRY</strong>
                                </SelectButton>
                              </div>
                            </Nav.Link>
                            <p>Image classifier (offline)</p>
                            <hr></hr>
                            <Nav.Link as={Link} to="/FacialLandmark">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center"
                                }} 
                              >
                                <SelectButton  
                                  disabled={stateFacial} 
                                  onClick={set_state_facial}
                                >
                                  <strong>TRY</strong>
                                </SelectButton>
                              </div>
                            </Nav.Link>
                            <p>Real-time facial landmarks detection</p>
                            <hr></hr>
                            <Nav.Link as={Link} to="/RealBodypix">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center"
                                }} 
                              >
                                <SelectButton 
                                  disabled={stateBodypix} 
                                  onClick={set_state_bodypix} 
                                >
                                  <strong>TRY</strong>
                                </SelectButton>
                              </div>
                            </Nav.Link>
                            <p>Real-time body segmentation</p>
                            <hr></hr>
                            <Nav.Link as={Link} to="/RealHandpose">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center"
                                }} 
                              >
                                <SelectButton 
                                  disabled={stateHandpose} 
                                  onClick={set_state_handpose}
                                >
                                  <strong>TRY</strong>
                                </SelectButton>
                              </div>
                            </Nav.Link>
                            <p>Real-time hanpose estimation</p>
                            <hr></hr>
                            <Nav.Link as={Link} to="/RealObject">
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center"
                                }} 
                              >
                                <SelectButton 
                                  disabled={stateRealObject} 
                                  onClick={set_state_real_object}
                                >
                                  <strong>TRY</strong>
                                </SelectButton>
                              </div>
                            </Nav.Link>
                            <p>Real-time objects detection</p>
                          </Nav>
                        </Offcanvas.Body>
                      </Navbar.Offcanvas>
                    </Container>
                  </Navbar>
                    
                  <br />
              </>
              <div><Header /></div>
                <div >
                    <Routes>
                        <Route path="/ImageDetection" element={stateImageDetection && (<ImageDetection />)} />
                        <Route path="/FacialLandmark" element={stateFacial && (<FacialLandmark /> )} />
                        <Route path="/RealBodypix" element={stateBodypix && (<RealBodypix/>)} />
                        <Route path="/RealHandpose" element={stateHandpose && (<RealHandpose />)} />
                        <Route path="/RealObject" element={stateRealObject && (<RealObject />)}/>
                        
                    </Routes>
                </div>
            </div>
          </BrowserRouter>
          
        </>
      </ThemeProvider>
      <Footer />
      </div>
      
  );
}

export default App;