import Link from 'next/link'
import React from 'react'
import ComingSoon from '../ComingSoon'
import { footerLinks, footerLinks2, footerLinks3 } from '@/types/footerlinks'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="all-footer-section">
        <div className="footer-img-section">
          <img src="/Footer-img.png" alt="Footer-img" />
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <div className="footer-link-head-text">
              <p>About</p>
            </div>
            <div className="footer-link-link">
              {footerLinks.map((link) => (
                <Link key={link} href="../../app/not-found.tsx">{link}</Link>
              ))}
            </div>
          </div>

          <div className="footer-link">
            <div className="footer-link-head-text">
              <p>Resources</p>
            </div>
            <div className="footer-link-link">
              {footerLinks2.map((link) => (
                <Link key={link} href="../../app/not-found.tsx">{link}</Link>
              ))}
            </div>
          </div>

          <div className="footer-link">
            <div className="footer-link-head-text">
              <p>Legals</p>
            </div>
            <div className="footer-link-link">
              {footerLinks3.map((link) => (
                <Link key={link} href="../../app/not-found.tsx">{link}</Link>
              ))}
            </div>
            <div className="footer-link-btns">
              <button>
                <Link href={"https://www.facebook.com/?locale=tr_TR"}><i className="fa-brands fa-facebook-f"></i></Link>
              </button>
              <button>
                <Link href={"https://x.com/?lang=tr"}><i className="fa-brands fa-twitter"></i></Link>
              </button>
              <button>
                <Link href={"https://www.instagram.com/"}><i className="fa-brands fa-instagram"></i></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrite-text">
        <p>© Copyright 2021. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
