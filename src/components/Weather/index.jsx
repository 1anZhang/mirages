import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import humidityIcon from 'svgs/humidity.svg';
import temperatureIcon from 'svgs/temperature.svg';
import pm25Icon from 'svgs/pm25.svg';
import windIcon from 'svgs/wind.svg';
import weatherIcon from 'svgs/weather.svg';

function Weather() {
  const [weather, setWeather] = useState({});


  useEffect(() => {
    fetch('https://v2.jinrishici.com/info',{
      token: 'vzm6x3z494pQl1Cp+6UFMjF4HPGDequz',
      credentials: 'include'
    }).then(data => {
      return data.json();
    }).then(res => {
      setWeather(res.data.weatherData);
    });
  }, []);

  return(
    <Wrapper>
      <Item>
        <Icon src={humidityIcon} />
        {weather.humidity}%
      </Item>
      <Item>
        <Icon src={temperatureIcon} />
        {weather.temperature}°C
      </Item>
      <Item>
        <Icon src={pm25Icon} />
        {weather.pm25}
      </Item>
      <Item>
        <Icon src={weatherIcon} />
        {weather.weather}
      </Item>
      <Item>
        <Icon src={windIcon} />
        {weather.windDirection}{weather.windPower}级
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  left: 20px;
  font-size: 18px;
  color: #fff;
  opacity: 1;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 8px;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin: 0 4px;
`

export default Weather;
