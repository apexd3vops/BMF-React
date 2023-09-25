import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class NavLinks extends Component {
  render() {
    const links =[
        {
            path: '/about',
            name: "About"
        },
        {
            path: '/recipes',
            name: "Recipes"
        },
        // {
        //     path: '/chats',
        //     name: "Chats"
        // },
        // {
        //     path: '/search',
        //     name: "Search"
        // },
    ]
    return (
        <div className='flex justify-end items-end lowercase'>            
            {
                links.map((link, index) => (
                    <NavLink className="text-xs mr-6" to={link.path} key={`${link.name}-${index}`}>{link.name}</NavLink>
                ))
            }   
        </div>
    )
  }
}
