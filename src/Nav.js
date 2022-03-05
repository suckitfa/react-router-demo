import React from 'react'
import { useNavigate,Link } from 'react-router-dom'
export default function Nav() {
    const navigate = useNavigate()
    const go2Home = () => {
        navigate('/')
    }
  return (
      <nav className='nav'>
          <h3><button onClick={go2Home}>Logo</button></h3>
          <ul className='nav-links'>
              <Link to="/about"><li>About</li></Link>
              <Link to="/shop"><li>Shop</li></Link>
          </ul>
      </nav>
  )
}


