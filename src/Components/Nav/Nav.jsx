import React from 'react'
import logo from '../../assets/images/logo.png'
import { HiOutlinePhone } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoVk } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import useLanguageStore from '../../store/languageStore';
import { MdClose } from "react-icons/md";
<MdClose />
import { IoMenu } from "react-icons/io5";
<IoMenu />
const Nav = () => {

  const { activeLanguage, setLanguage, active, setActive } = useLanguageStore()


  return (
    <>
      <div className='nav'>
        <div className="container">
          <div className="nav_box">
            <a href="#!" className='nav_logo'>
              <img src={logo} alt='logo' />
            </a>
            <IoMenu className='nav_menu' onClick={() => setActive(true)} />
            <div className={`nav_box2 ${active && 'active'}`}>
              <MdClose className='nav_close' onClick={() => setActive(false)} />

              <ul className="nav_list">
                <li className="nav_item"><a href="#!" className='nav_link'>О компании</a></li>
                <li className="nav_item"><a href="#!" className='nav_link'>Услуги</a></li>
                <li className="nav_item"><a href="#!" className='nav_link'>Портфолио</a></li>
                <li className="nav_item"><a href="#!" className='nav_link'>Контакты</a></li>
              </ul>
              <a href="tel:+998714561923" className='nav_phone'>
                <HiOutlinePhone className='nav_phone_icon' />
                +998714561923
              </a>
              <div className="nav_language">
                <a href="#!"
                  className={`nav_language_link ${activeLanguage === 'RU' ? 'active' : ''}`}
                  onClick={() => setLanguage('RU')}> RU
                </a>
                <p>/</p>
                <a href="#!"
                  className={`nav_language_link ${activeLanguage === 'UZ' ? 'active' : ''}`}
                  onClick={() => setLanguage('UZ')}>UZ
                </a>
                <p>/</p>
                <a href="#!"
                  className={`nav_language_link ${activeLanguage === 'EN' ? 'active' : ''}`}
                  onClick={() => setLanguage('EN')}>EN
                </a>
              </div>
              <div className="nav_socials">
                <a href="#!" className='nav_socials_link'>
                  <FaLinkedinIn className='nav_socials_icon' />
                </a>
                <a href="#!" className='nav_socials_link'>
                  <IoLogoVk className='nav_socials_icon' />
                </a>
                <a href="#!" className='nav_socials_link'>
                  <FaTelegramPlane className='nav_socials_icon' />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="path">
        <div className="container">
          <div className="path_box">
            <a href="#!" className='path_link1'>Главная</a>
            <p>/</p>
            <a href="#!" className='path_link'>Контакты</a>
          </div>
        </div>
      </div>
    </>

  )
}

export default Nav
