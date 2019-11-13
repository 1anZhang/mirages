/* eslint-disable no-undef */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import BaseButton from '@material-ui/core/ButtonBase';

import Dropdown from 'components/Dropdown';
import search from 'svgs/search.svg';
import { SearchPrefix, IconList } from 'utils/const';
import { changeSearchType } from '@/store/search/actions';

function Search() {
  const [inputData, setInput] = useState('');
  const searchType = useSelector(state => state.search.searchType);
  const dispatch = useDispatch();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && document.activeElement.id === 'searchInput') {
      window.location.href = `${SearchPrefix[searchType]}${inputData}`;
    }
  }

  const onClick = (action) => {
    dispatch(changeSearchType(action));
  }

  const DropdownMenu = () => (
    <IconListWrapper>
      {
        Object.keys(IconList).map(key => (
          <BaseButton key={key} focusRipple onClick={() => onClick(key)}>
            <IconItem>
                <IconImg dangerouslySetInnerHTML={{ __html: IconList[key] }}/>
            </IconItem>
          </BaseButton>
        ))
      }
    </IconListWrapper>
  )

  return (
    <Wrapper>
      <Icon dangerouslySetInnerHTML={{ __html: search }} />
      <Input id="searchInput" value={inputData} onChange={(e) => setInput(e.target.value)} onKeyPress={handleKeyDown}/>
      <Dropdown menu={DropdownMenu()}>
        <Button fullWidth >
          <CurrentIcon dangerouslySetInnerHTML={{ __html: IconList[searchType] }} />
        </Button>
      </Dropdown>
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
  padding: 5px 0 5px 18px;
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

const Icon = styled.div`
  display: block;
  width: 24px;
  height: 24px;
`

const CurrentIcon = styled.div`
  width: 24px;
  height: 24px;
`

const IconListWrapper = styled.li`
  position: absolute;
  display: flex;
  top: 6px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);

  &::after {
    content: '';
    position: absolute;
    top: -6px;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: block;
    width: 0;
    height: 0;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    border-bottom: 6px solid rgba(255, 255, 255, 1);
  }
`

const IconItem = styled.ul`
  margin: 0 4px;
  padding: 3px 12px;
  border-bottom: 1px solid #ada;
`

const IconImg = styled.div`
  width: 24px;
  height: 24px;
`