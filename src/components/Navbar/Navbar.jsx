import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu] = useState('home');

  return (
    <div className='navbar'>
      <h1 className="logo">Fahith KRM.</h1>
      <ul className="nav-menu">
        <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => setMenu('home')} className={menu === 'home' ? "active" : '' }>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu('about')} className={menu === 'about' ? "active" : '' }>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => setMenu('services')} className={menu === 'services' ? "active" : '' }>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#portfolio'><p onClick={() => setMenu('portfolio')} className={menu === 'portfolio' ? "active" : '' }>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu('contact')} className={menu === 'contact' ? "active" : '' }>Contact</p></AnchorLink></li>
      </ul>
      <AnchorLink className='anchor-link' offset={50} href='#contact'>
      <button className="nav-connect">Connect With Me</button>
      </AnchorLink>
    </div>
  )
}

export default Navbar
