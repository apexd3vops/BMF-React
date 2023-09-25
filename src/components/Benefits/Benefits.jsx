import React, { Component } from 'react'

export default class Benefits extends Component {
    render() {
        return (
            <div className='flex justify-between px-10 mx-auto container mb-4 '>
                <div className='flex flex-1 mb-4'>
                    <div className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
                        </svg>
                        {/* TODO: Add SVG */}
                    </div>
                    <div>
                        <h3 className=' font-Krona text-sm'>Delivery</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div className='flex flex-1 mb-4'>
                    <div className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
                        </svg>
                        {/* TODO: Add SVG */}
                    </div>
                    <div>
                        <h3 className=' font-Krona text-sm'>Products</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur  Modi explicabo esse </p>
                    </div>
                </div>
                <div className='flex flex-1 mb-4'>
                    <div className='mr-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M8.25 10.875a2.625 2.625 0 115.25 0 2.625 2.625 0 01-5.25 0z" />
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.125 4.5a4.125 4.125 0 102.338 7.524l2.007 2.006a.75.75 0 101.06-1.06l-2.006-2.007a4.125 4.125 0 00-3.399-6.463z" clipRule="evenodd" />
                        </svg>
                        {/* TODO: Add SVG */}
                    </div>
                    <div>
                        <h3 className=' font-Krona text-sm'>Payment</h3>
                        <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi explicabo esse Modi explicabo esse </p>
                    </div>
                </div>

            </div>
        )
    }
}
