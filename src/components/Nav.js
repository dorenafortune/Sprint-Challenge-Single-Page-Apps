import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
      
        <div className="Nav">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
              <Link to ="characters">Characters</Link>
          </div>
          </div>
         
    
    );
  };

  export default Nav