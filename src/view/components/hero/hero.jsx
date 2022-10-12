import React from 'react'
import Video from "../../assets/videos/Clouds.mp4"
import { Container,HeroBg,VideoLoop, HeroContent,HeroImg,HeroP,HeroSocial } from './styled'
import { FaFacebookF, FaYoutube, FaWhatsapp,FaTiktok,FaInstagram } from "react-icons/fa";
import Logo from "../../assets/images/Logo.png"

const Hero = () => {
  return (
    <>
    <Container>
        <HeroBg>
            <VideoLoop src={Video} autoPlay loop muted type="video/mp4"/>
        </HeroBg>
        <HeroContent>
          <HeroImg src={Logo} />
          <HeroP >
                Adora en Espiritu y Verdad Junto a Nosotros</HeroP>
        </HeroContent>

        <HeroSocial>
          <li><a href='https://facebook.com'><FaFacebookF /></a></li>
          <li><a href='https://youtube.com'><FaYoutube /></a></li>          
          <li><a href='https://wa.me/584248637828'><FaWhatsapp /></a></li>
          <li><a href='https://tiktok.com'><FaTiktok /></a></li>          
          <li><a href='https://instagram.com'><FaInstagram /></a></li>
        </HeroSocial>
    </Container>
    </>
  )
}

export default Hero