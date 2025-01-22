import React from 'react'
import { Link } from 'react-router-dom';

const  HomePage = () => {
  return (
      <div> <p> HomePage</p>

           <Link to="/login"> Log in </Link>
          <Link to="/register">Sign up</Link>
    </div>
  )
}

export default  HomePage