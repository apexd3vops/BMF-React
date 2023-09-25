import React, { Component } from 'react'
import SectionTitle from '../SectionTitle'
import ButtonLink from '../ButtonLink'
import SecondaryBanner from '../SecondaryBanner'

export default class FarmProducts extends Component {
  render() {
    return (
      <div>
        <div className='container mx-auto mt-4'>
          <div className='flex items-center justify-between px-10 pt-4 pb-4'>
            <SectionTitle sectionTitle="Top Products" />
            <ButtonLink text="See More" to="/products" />
          </div>
          <div className='h-80'></div>
        </div>
        <SecondaryBanner className="bottom: -68px" />
      </div>
    )
  }
}
