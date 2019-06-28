import React from 'react';
import styled from 'styled-components';

import Greeting from '../../components/Greeting';
import Search from '../../components/Search';
import Timer from '../../components/Timer';

import duck from '../../svgs/duck.svg';

function MainContent() {
  return (
    <Content>
      <Logo src={duck} />
      <Timer />
      <Greeting />
      <Search />
    </Content>
  );
}

export default MainContent;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  position: absolute;
  left: 10px;
  top: 5px;
  display: block;
  width: 40px;
  height: 40px;
`