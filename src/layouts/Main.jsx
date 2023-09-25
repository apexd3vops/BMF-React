import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Main extends Component {
  render() {
    return (
      <>
        <Navbar> </Navbar>
        <div className='container mx-auto'>
          {this.props.children}
        </div>
        <Footer></Footer>
      </>
    )
  }
}
