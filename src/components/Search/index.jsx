import React, { useState } from 'react';
import styled from 'styled-components';

import search from '../../svgs/search.svg';
import google from '../../svgs/google.svg';

function Search() {
  const [inputData, setInput] = useState('');
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && document.activeElement.id === 'searchInput') {
      window.location.href = `https://www.google.com/search?q=${inputData}`;
    }
  }
  return (
    <Wrapper>
      <Icon src={search} />
      <Input id="searchInput" value={inputData} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyDown}/>
      <Select src={google} />
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 96px;
  width: 500px;
  height: 50px;
  padding: 5px 18px;
  border-radius: 25px;
  background-color: #fff;
`
const Input = styled.input`
  flex: 1;
  margin: 0 10px;
  height: 30px;
  outline: none;
  border: none;
  font-size: 18px;
`

const Select = styled.img`
  width: 24px;
  height: 24px;
`
const Icon = styled.img`
  display: block;
  width: 24px;
  height: 24px;
`