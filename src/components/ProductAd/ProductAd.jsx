import React, { Component } from 'react';
import bannerImg from './img1.jpeg'

export default class ProductAd extends Component {
    render() {
        return (
            <div className='bg-grey-light mb-4 pt-20 pb-16'>
                <div className='flex items-center justify-between container mx-auto pt-24 pb-10 '>
                    <div className='mr-4'>
                        <img className='object-scale-down px-7' src={bannerImg} alt="" />
                    </div>
                    <div className=''>
                        <h2 className='text-xl font-Krona mb-4'>
                            Eat Farm Fresh Foods Delivered To Your Doorstep

                        </h2>
                        <p className='text-sm pr-5 mr-10 mb-2'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus placeat possimus quae, blanditiis expedita animi, doloremque esse cum,
                        </p>
                        <p className='text-sm pr-5 mr-10'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus placeat possimus quae, blanditiis expedita animi, doloremque esse cum,
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
