"use client"

import { section5Links } from '@/types/section5'
import { useRouter } from 'next/navigation'
import React from 'react'

const Section5 = () => {

  const router = useRouter()
  return (
    <div className='section-5'> 
      <div className="section-5-big-text">
        <p>Multiple Accessories</p>
      </div>
      <div className="section-5-small-text">
        <p>There are multiple modes for the scooter for your multiple needs.</p>
      </div>
      <div className="section-5-upper">
        <div className="section-5-upper-1">
          <p>Golf Bag Rock</p>
          {
          section5Links.map(({id, url, description}) => {
            return (  
              <div className='section-5-usage' key={id}>
                <img src={url} />
                <p>{description}</p>
              </div>
            )
          })
        }
        </div>
        <div className="section-5-upper-2">
          <img src="/Section-5-img-1.png" alt="Section-5-img-1" />
          <img src="/Section-5-img-2.png" alt="Section-5-img-2" />
        </div>
        
      </div>
      <div className="section-5-under">
        <div className="section-5-under-1">
          <img src="/Section-5-img-3.png" alt="Section-5-img-3" />
          <img src="/Section-5-img-4.png" alt="Section-5-img-4" />
        </div>
        <div className="section-5-under-2">
           <p>Shopping Rack</p>
          {
          section5Links.map(({id, url, description}) => {
            return (  
              <div className='section-5-usage' key={id}>
                <img src={url} />
                <p>{description}</p>
              </div>
            )
          })
          }
        </div>
      </div>
      <div className="section-5-btn">
        <button onClick={() => router.push("/ComingSoon")}>More Accessories Coming Soon</button>
      </div>
    </div>
  )
}

export default Section5
