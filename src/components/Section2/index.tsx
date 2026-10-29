import { parameters } from '@/types/section2'
import React from 'react'

const Section2 = () => {
  return (
    <div className='section2'>
        <div className="section-2-cards">
                {
                    parameters.map(({id, value, unit, label}) => {
                        return (
                            <div className='section-2-card' key={id}>
                                <p><span>{value}</span> {unit}</p>
                                <p>{label}</p>
                            </div>
                        )
                    })
                }
        </div>
    </div>
  )
}

export default Section2
