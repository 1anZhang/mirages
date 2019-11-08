import React, { useState }  from 'react';
import styled from 'styled-components';


function handleTimer(unit) {
  let newUint = '';
  newUint = `${unit}`;
  if (newUint.length === 2) return newUint;
  newUint = `0${newUint}`;
  return newUint;
}

function paserTime(date) {
  if (!(date instanceof Date)) {
    throw new TypeError('Time type error!');
  }
  const year = date.getFullYear();
  const month = handleTimer(date.getMonth() + 1);
  const day = handleTimer(date.getDate());
  const hour = handleTimer(date.getHours());
  const minute = handleTimer(date.getMinutes());
  const seconds = handleTimer(date.getSeconds());
  const res = `${year}/${month}/${day} ${hour}:${minute}:${seconds}`;
  return res;
}
function Timer() {
  const [date, setDate] = useState(new Date());
  setInterval(() => {
    setDate(new Date());
  }, 1000 );
  return(
    <Wrapper>
      { paserTime(date) }
    </Wrapper>
  );
}

const Wrapper = styled.p`
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 20px;
  color: #fff;
  opacity: 1;
`

export default Timer;
