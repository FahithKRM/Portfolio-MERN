import './Header.css'
import profile_img from '../../assets/profile_img.svg'

const Header = () => {
  return (
    <div className='header'>
      <img src={profile_img} alt="" />
      <h1>I am Faahith, Full Stack Developer based in USA.</h1>
      <p>I am full stack developer from Clifornia, USA with 10 years of experience.</p>
      <div className="header_action">
        <div className="header_connect">Connect with me</div>
        <div className="header_resume">My resume</div>
      </div>
    </div>
  )
}

export default Header
