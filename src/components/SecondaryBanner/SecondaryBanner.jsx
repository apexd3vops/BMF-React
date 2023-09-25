import React, { Component } from 'react';
import bannerImage from './img1.png';
import ButtonLink from '../ButtonLink';
import './SecondaryBanner.css';


export default class SecondaryBanner extends Component {
  render() {
    return (
      <div className='banner__secondary flex justify-between container mx-auto bg-orange-400 mt-4 px-20 rounded-2xl'>
        <div className='py-4 px-2'>
          <h1 className='text-xl font-Krona mb-4 items-center'>
            Eat Farm Fresh Foods <br /> Delivered To Your <br /> Doorstep
          </h1>
          {/* <p className='text-sm mb-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus placeat possimus quae, blanditiis expedita animi, doloremque esse cum, reiciendis aliquam cupiditate. Alias voluptatem quo reiciendis culpa perspiciatis repellat praesentium
          </p> */}
          <ButtonLink text="Buy More" to="/about" />
        </div>
        <div className='ml-4'>
          <img
          className='py-4 px-8'
          width={250} 
          src={bannerImage} alt="" />
        </div>
      </div>
    )
  }
}
