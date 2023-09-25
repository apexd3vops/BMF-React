import React, { Component } from 'react'

export default class SectionTitle extends Component {
  render() {
    const {sectionTitle} = this.props
    return (
        <h3 className='font-Krona'>{sectionTitle}</h3>    
    )
  }
}
