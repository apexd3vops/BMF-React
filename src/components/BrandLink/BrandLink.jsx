import React, { Component } from 'react'
import { Link } from 'react-router-dom'


const BrandLink = ({ classes }) => (

    <Link className={`text-2xl ${classes} font-Krona px-4`} to="/">
        BuyMoreFoods
    </Link>

)

export default BrandLink;

