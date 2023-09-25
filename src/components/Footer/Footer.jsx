import React, { Component } from 'react'

import './Footer.css'
import BrandLink from '../BrandLink/BrandLink'

export default class Footer extends Component {
  render() {
    const links = [
      'About',
      'Recipes',
      'Contact',
      'Shop'
    ]

    return (
      // <footer className="bg-gray-500 text-light">Footer</footer>
      <footer className="bg-green text-light  justify-between px-6">
        <div className='flex justify-between pt-3'>
          <BrandLink className="text-light"></BrandLink>
          <div className='flex items-center lowercase'>
            {links.map(link => (
              <a className='ml-4' to="/" key={link}>{link}</a>
            ))}
          </div>
          {/* TODO:Fix Console Errors */}
        </div>

        <p className='italic text-xs'>
          Eat farm fresh produce with BuyMoreFoods.
        </p>
      </footer>
    )
  }
}
