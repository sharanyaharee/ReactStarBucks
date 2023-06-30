import React from 'react'
import './menuBar.css'
import { Link } from 'react-router-dom'

const MenuBar = () => {
  return (
    <div>
      <header>
        <ul id="header-menu">
          <Link to="menu">
            <li>All products</li>
          </Link>
          <Link to="menu">
            <li>Featured</li>
          </Link>
          <Link to="menu">
            <li>Previous Orders</li>
          </Link>
          <Link to="menu">
            <li>Favorite Products</li>
          </Link>
        </ul>
      </header>
    </div>
  )
}

export default MenuBar
