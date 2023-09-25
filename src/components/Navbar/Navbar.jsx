import React, { Component } from 'react'
import './Navbar.css'
import BrandLink from '../BrandLink'
import NavLinks from '../NavLinks'
import ChatIcon from '../Icons/ChatIcon'
import CartIcon from '../Icons/CartIcon'
import SearchIcon from '../Icons/SearchIcon'
import UserIcon from '../Icons/UserIcon'


export class Navbar extends Component {
  render() {
    return (
      <nav className='flex justify-between py-3 font-Krona container mx-auto bg-orange-400'>
        <BrandLink></BrandLink>
        <div className='flex justify-end items-end'>
          {/* links */}
          <NavLinks />
          {/* Icons links */}
          <ChatIcon />
          <CartIcon />
          <SearchIcon />
          <UserIcon />
        </div>
      </nav>
    )
  }
}

export default Navbar