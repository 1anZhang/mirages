import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


function Greeting() {
  const [poem, setPoem] = useState({origin: {}});

  useEffect(() => {
    fetch('https://v2.jinrishici.com/one.json',{
      token: 'vzm6x3z494pQl1Cp+6UFMjF4HPGDequz'
    }).then(data => {
      return data.json();
    }).then(res => {
      setPoem(res.data);
    });
  }, []);

  return(
    poem.content ? <GreetPoem>
      <Poem>{poem.content}</Poem>
      <Origin>——{poem.origin.author}《{poem.origin.title}》</Origin>
    </GreetPoem> : <div></div>
  );
}

export default Greeting;

const GreetPoem = styled.div`
  position:absolute;
  bottom: 360px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 780px;
  color: #fff;
  text-align: right;
`

const Poem = styled.p`
  font-size: 40px;
  font-weight: bold;
`;

// const Author = styled.p`
//   margin-top: 10px;
//   font-size: 20px;
// `;

const Origin = styled.p`
  margin-top: 10px;
  font-size: 20px;
`