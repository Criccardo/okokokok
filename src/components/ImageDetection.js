import React from 'react';

import ImageClassificator from './ImageClassificator.js';

import styled from "styled-components";

const AppContainer = styled.div`
  width:20%;
  height: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 200px;
  margin-top: 10px;
  background-color: trasparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const ImageDetection = () =>{
  return (
    <AppContainer>
      <ImageClassificator />
    </AppContainer>
  )
}
