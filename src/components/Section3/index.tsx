import { section3Links } from '@/types/Section3'
import React from 'react'

const Section3 = () => {
  return (
    <div className='section-3'>
        <div className="section-3-big-text">
            <p>Product Information</p>
        </div>
        <div className="section-3-small-text">
            <p>Our Scooter has following unique design and technology features:</p>
        </div>
        <div className="section-3-left-right">
            <div className="section-3-left">
                <img src="/Section-3-main-img.png" alt="Section-3-main-img" />
            </div>
            <div className="section-3-right">
                {
                    section3Links.map(({id, url, descripton }) => {
                    return (
                            <div className='section-3-right-usage' key={id}>
                                <img src={url} alt="accept icon" />
                                <p>{descripton}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Section3
