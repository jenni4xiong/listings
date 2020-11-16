import React from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

const Card = (props: any) => {
  return (
    <div>
      Card Hello
      <Link to="/" style={{textDecoration: 'none'}}>Home</Link>
    </div>
  )
}

export default withRouter(Card);