import React from 'react';
import styled from 'styled-components';

function Greeting() {
  const userName = 'ZhangYxY';
  return(
    <GreetText>
      Have a nice day，{userName}!
    </GreetText>
  );
}

export default Greeting;

const GreetText = styled.p`
  margin-top: 48px;
  font-size: 50px;
  font-weight: bold;
  color: #fff;
  opacity: 0.8;
`