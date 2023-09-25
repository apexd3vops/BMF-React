import React, { Component } from 'react';
import Banner from '../components/Banner'
import FarmProducts from '../components/FarmProducts';
import ProductAd from '../components/ProductAd';
import Benefits from '../components/Benefits/Benefits';

export default class Home extends Component {
  render() {
    return (
      <>
        <Banner />
        <FarmProducts />
        <ProductAd />
        <Benefits />
      </>
    
    )
  }
}
