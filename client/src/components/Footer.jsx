import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
     <ul className="footer_categories">
      <li><Link to="/posts/categories/Civil">Civil</Link></li>
      <li><Link to="/posts/categories/Criminal">Criminal</Link></li>
      <li><Link to="/posts/categories/Commercial">Commercial Law</Link></li>
      <li><Link to="/posts/categories/Finance">Finance</Link></li>
      <li><Link to="/posts/categories/Education">Education</Link></li>
      </ul> 
      <div className="footer_copyright">
        <small>All Rights Reserved &copy; Copyright, ReachLaw</small>
      </div>
    </footer>
  )
}

export default Footer
