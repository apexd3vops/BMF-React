import React, { Component } from 'react';
import bannerImage from './bannerImage.jpeg';
import ButtonLink from '../ButtonLink';


export default class Banner extends Component {
    render() {
        return (
            <div className='flex items-center justify-between container mx-auto py-4 px-2 bg-light'>
                <div>
                    <h1 className='text-xl font-Krona mb-4'>
                        Eat Farm Fresh Foods Delivered To Your Doorstep
                    </h1>
                    <p className='text-sm mb-6 pr-10 mr-18'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa voluptatibus placeat possimus quae, blanditiis expedita animi, doloremque esse cum, reiciendis aliquam cupiditate. Alias voluptatem quo reiciendis culpa perspiciatis repellat praesentium
                    </p>
                    <ButtonLink text="Learn More" to="/about" isMain />
                </div>
                <div>
                    <img className='object-scale-down px-7' src={bannerImage} alt="" />
                </div>
            </div>
        )
    }
}
