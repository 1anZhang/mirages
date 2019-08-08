import React from 'react';
import styled from 'styled-components';
import bg from 'images/bg.jpg';

function Background() {
  const bgUrl = `url(${bg})`;
  return (
    <Wrapper bgUrl={bgUrl}></Wrapper>
  );
}

export default Background;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 0;
  background-image: ${props => props.bgUrl};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`