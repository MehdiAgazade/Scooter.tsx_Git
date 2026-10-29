import { section7ImgLinks } from '@/types/section7'
import React from 'react'

const Section7 = () => {
  return (
    <div className='section-7'>
      <div className="section-7-big-text">
        <p>Colors</p>
      </div>
      <div className="section-7-small-text">
        <p>Checkout our products colors.</p>
      </div>
      <div className="section-7-all-imgs">
        <div className="section-7-main-img">
            <img src="/Section-7-main-img.png" alt="Section-7-main-img" />
        </div>
        <div className="section-7-imgs">
            {
                section7ImgLinks.map(({id, url}) => {
                    return <img key={id} src={url} />
                })
            }
        </div>
      </div>
    </div>
  )
}

export default Section7
