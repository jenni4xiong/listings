import React from 'react';
import {Link} from 'react-router-dom';

const Card = () => {
  return (
    <div>
      Card Hello
      <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
    </div>
  )
}

export default Card;