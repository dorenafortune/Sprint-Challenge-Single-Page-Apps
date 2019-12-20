import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components"

const Navigation =styled.div`
display:flex;
justify-content: space-around;
align-items:center;
background: lightblue;
color: white;

`

const Text =styled.div`
font-size: 25px;
font-family: 'Odibee Sans', cursive;



`

const Nav = () => {
    return (
      
        <Navigation>
          <Text>
            <Link to="/">Home</Link>
          </Text>
          <Text>
              <Link to ="characters">Characters</Link>
          </Text>
          <Text>
          <Link to ="search">Search</Link>
          </Text>
          </Navigation>
         
    
    );
  };

  export default Nav