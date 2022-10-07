import React from 'react'
import { Container, NavContainer,NavSection,Navmenu,Nlink,MobileIcon,Scontainer,Sheader,Smenu,Swidget,Sfooter,Scloseicon,SmootLink } from './styled'

import { FaBars,FaFacebookF, FaYoutube, FaWhatsapp,FaTiktok,FaInstagram  } from "react-icons/fa";



export const Navbar = ({toggle, isScrolled, isHero,...props}) => {  
  return (
    <>
    <Container isScrolled={isScrolled} isHero={isHero}>
        <NavContainer>
            <NavSection  isHero={isHero}>Iglesia Puertas Del Cielo</NavSection>
            <Navmenu isHero={isHero} >
                <Nlink to={`/`}  isHero={isHero}>Inicio</Nlink>
                <li className='DropMenu'>Contenido
                    <ul className='submenu'>
                        <Nlink to={`/predicas`} state={{sendTo:'1'}} isHero={false}>Predicas</Nlink>                        
                        <li>Estudios</li>
                        <li>Campañas Beneficas</li>
                        <li>AudioVisual</li>
                        <li>La Iglesia En la calle</li>
                    </ul>
                </li>
                <Nlink to={`/about`} isHero={isHero}>Sobre La Iglesia</Nlink>
                <Nlink isHero={isHero}>Blog</Nlink>
                <Nlink isHero={isHero}>Contactanos</Nlink>
            </Navmenu>
            <MobileIcon onClick={toggle} isHero={isHero} >
            <FaBars />
          </MobileIcon>
        </NavContainer>
    </Container>
    </>
  )
}

export const SideBar= ({isOpen,toggle})=>{
  return (
    <>
    <Scontainer isOpen={isOpen}>
      <Sheader>
        <h2>Iglesia Puertas del Cielo</h2>
        <Scloseicon onClick={toggle} />
      </Sheader>
      <Smenu>
          <li>Inicio</li>
          <li>Predicas</li>
          <li>Evangelismos</li>
          <li>Estudios</li>
          <li>Peticiones</li>
          <li>Teatros</li>
          <li>AudioVisual</li>
          <li>Ministerios</li>
          <li>Blog</li>
          <li>Contactanos</li>
      </Smenu>
      
      <Swidget>
          <li><a href='https://facebook.com'><FaFacebookF /></a></li>
          <li><a href='https://youtube.com'><FaYoutube /></a></li>          
          <li><a href='https://wa.me/584248637828'><FaWhatsapp /></a></li>
          <li><a href='https://tiktok.com'><FaTiktok /></a></li>          
          <li><a href='https://instagram.com'><FaInstagram /></a></li>
      </Swidget>
      
      <Sfooter>
        
        <p>Copyright@ 2022 iglesia Puertas Del Cielo</p>
      </Sfooter>
    </Scontainer>
    </>
  )
}

