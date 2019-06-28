import React, { useState }  from 'react';
import styled from 'styled-components';

function Timer() {
  const [date, setDate] = useState(new Date());
  setInterval(() => {
    setDate(new Date());
  }, 1000);
  return(
    <Wrapper>
      { paserTime(date) }
    </Wrapper>
  );
}

export default Timer;

function paserTime(date) {
  if (!date instanceof Date) {
    throw new TypeError('Time type error!');
  }
  let year = date.getFullYear();
  let month = handleTimer(date.getMonth() + 1);
  let day = handleTimer(date.getDate());
  let hour = handleTimer(date.getHours());
  let minute = handleTimer(date.getMinutes());
  let seconds = handleTimer(date.getSeconds());
  let res = `${year}/${month}/${day} ${hour}:${minute}:${seconds}`;
  return res;
}

function handleTimer(unit) {
  unit += '';
  if (unit.length === 2) return unit;
  unit = '0' + unit;
  return unit;
}
const Wrapper = styled.p`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 18px;
  color: #fff;
  opacity: 0.9;
`