import { UserComent } from '@/types/section8'
import React from 'react'

const Section8 = () => {
  return (
    <div className='section-8'>
      <div className="section-8-big-text">
        <p>Testimonials</p>
      </div>
      <div className="section-8-coments">
        <div className="section-8-coment">
            <div className="section-8-coment-star">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
            </div>
            <div className="section-8-coment-text">
                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
            </div>
            <div className="section-8-user-profile">
                <div className="section-8-user-img">
                    <img src="/Serhiy-Hipskyy.png" alt="Serhiy Hipskyy" />
                </div>
                <div className="section-8-user">
                    <div className="section-8-user-name">
                        <p>Serhiy Hipskyy</p>
                    </div>
                    <div className="section-8-user-work">
                        <p>CEO Universal</p>
                    </div>
                </div>
            </div>
        </div>
        {
            UserComent.map(({id, coment, userImg, userName, userWork}) => {
                return <div className='section-8-coments-2' key={id}>
                    <div className='section-8-coment-2'>
                    <div className="section-8-coment-star">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <div className="section-8-coment-text">
                        <p>{coment}</p>
                    </div>

                    <div className="section-8-user-profile">
                        <div className="section-8-user-img">
                    <img src={userImg} />
                </div>
                <div className="section-8-user">
                    <div className="section-8-user-name">
                        <p>{userName}</p>
                    </div>
                    <div className="section-8-user-work">
                        <p>{userWork}</p>
                    </div>
                </div>
            </div>
                </div>
                </div>
            })
        }
      </div>
    </div>
  )
}

export default Section8
