import React from 'react';
import styled from 'styled-components';

const userName = 'ZhangYxY';
const TimeRange = [
  `早上好, ${userName}, 今天又是摸鱼的一天呢！`,
  `中午好, ${userName}, 又到了吹比午睡的时间！`,
  `下午好, ${userName}, 今天的bug还有多少没改！`,
  `晚上好, ${userName}, 收拾收拾东西准备回家了！`,
  `夜深了, ${userName}, 还没回家该吃小龙虾了！`,
]

function Greeting() {
  const time = new Date().getHours();
  let timeIndex = 0;
  switch (time) {
    case time <= 11 && time > 8:
      timeIndex = 0;
      break;
      case time <= 14 && time > 11 :
        timeIndex = 1;
        break;
      case time <= 18 && time > 14:
        timeIndex = 2;
        break;
      case time <= 21 && time > 18:
        timeIndex = 3;
        break;
      case time <= 24 && time > 21:
        timeIndex = 4;
        break;
    default:
      break;
  }
  console.log('123', time);
  return(
    <GreetText>
     {TimeRange[timeIndex]}
    </GreetText>
  );
}

export default Greeting;

const GreetText = styled.p`
  position:absolute;
  bottom: 160px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-size: 40px;
  font-weight: bolder;
  text-align: center;
  color: #fff;
  opacity: 0.8;
`