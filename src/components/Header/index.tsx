import { navBtns } from '@/types/navLinks'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='header'>
        <div className='navLogo'>
            <img src="/logo.png" alt="Logo" />
        </div>
        <div className="navLinks">
            <Link href={"#"}>PRODUCTS</Link>
            <Link href={"#"}>GALLERY</Link>
            <Link href={"#"}>CONTACT</Link>
        </div>
      <div className="navBtns">
        {
            navBtns.map(({id, to, title}) => {
                return (
                    <Link key={id} href={to}>{title}</Link>
                ) 
            })
        }
      </div>
      <div className="bars">
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
    <div className="navLink"></div>
    </div>
    
  )
}

export default Header
