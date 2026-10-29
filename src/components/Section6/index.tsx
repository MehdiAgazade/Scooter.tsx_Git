"use client"

import { section6BtnLinks } from '@/types/section6'
import { useRouter } from "next/navigation";

const Section6 = () => {
    const router = useRouter()

  return (
    <div className='section-6'>
      <div className="section-6-big-text">
        <p>Gallery</p>
      </div>
      <div className="section-6-small-text">
        <p>View gallery of our products and make yourself satisfied with our creation.</p>
      </div>
      <div className="section-6-left-right">
        <div className="section-6-left">
            <div className="section-6-left-img">
                <img src="/Section-6-img-1.png" alt="Section-6-img-1" />
            </div>
            <div className="section-6-left-btns">
                {
                    section6BtnLinks.map(({id, description}) => {
                        return <button key={id} onClick={() => router.push("/ComingSoon")}>{description}</button>
                    })
                }
            </div>
        </div>
        <div className="section-6-right">
            <img src="/Section-6-img-2.png" alt="Section-6-img-2" />
            <img src="/Section-6-img-3.png" alt="Section-6-img-3" />
        </div>
      </div>
    </div>
  )
}

export default Section6
