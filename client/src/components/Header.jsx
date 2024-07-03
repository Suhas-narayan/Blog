import React, { useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import Logo from "../images/3.png"

import{UserContext} from '../context/userContext'

const Header = () => {
  const[isNavShowing ,setISNavShowing] =useState(window.innerWidth > 800 ? true : false);

  const {currentUser} = useContext(UserContext)


  const closeNavHandler =()=>{
    if(window.innerWidth < 800){
      setISNavShowing(false);
    }else{
      setISNavShowing(true);
    }
  }
  return (
   <nav>
    <div className="conatiner nav_container">
      <Link to="/" className='nav_logo' onClick={closeNavHandler}>
          <img src={Logo} alt=''/>
      </Link>
      { currentUser?.id &&    isNavShowing && <ul className="nav_menu">
        <li><Link to={`/profile/${currentUser.id}`} onClick={closeNavHandler}> {currentUser?.name}</Link></li>
        <li><Link to="/create" onClick={closeNavHandler}> Create Post</Link></li>
        <li><Link to="/authors" onClick={closeNavHandler}> Authors</Link></li>
        <li><Link to="/logout" onClick={closeNavHandler}> Logout</Link></li>
      </ul>}

      { !currentUser?.id &&    isNavShowing && <ul className="nav_menu">
        <li><Link to="/authors" onClick={closeNavHandler}> Authors</Link></li>
        <li><Link to="/login" onClick={closeNavHandler}> Login</Link></li>
      </ul>}

      <button className="nav_toggle-btn" onClick={() => setISNavShowing(!isNavShowing)}>
{
  isNavShowing ? <AiOutlineClose style={{ color: 'white' }}/> : <FaBars style={{ color: 'white' }}/>
}
      

      </button>
    </div>
   </nav>
  )
}

export default Header
