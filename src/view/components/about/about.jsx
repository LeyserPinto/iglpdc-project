import React,{useEffect,useState} from 'react'
import { Box,Container,AbContent,Header,SwitSection } from './styled'
import { FaPrayingHands, FaBookOpen,FaBook } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const AboutUs = () => {
  
  AOS.init({ duration: 1000, delay: 200 });
  return (
      <>
        <Container>
          <AbContent>
              <section>
                {/* Text Header of the Church */}
                <Header>
                  <h4 data-aos="fade-up">Sobre la Iglesia</h4>                  
                  <h1 data-aos="fade-right">PUERTAS DEL CIELO</h1>
                  <p data-aos="fade-left">Breve Resumen de la Historia de la Iglesia </p>
                </Header>
                {/* Section that containt action button */}
                <SwitSection>                
                    {/* Box 1: Pray Section */}
                    <Box data-aos="fade-up">
                      <section className='iconSection'>
                        <FaPrayingHands />
                      </section>
                      <section className='textSection'>
                        <h2>PETICIÓN DE ORACIÓN</h2>
                        <p>Lorem ipsum dolor, consectetur elit, sed do tempor incididunt
                      labore.</p>
                      </section>
                    </Box>
                    {/* Box 2: bible study */}
                    <Box data-aos="fade-down" >
                      <section className='iconSection'>
                        <FaBook />
                      </section>
                      <section className='textSection'>
                        <h2>ESTUDIOS BIBLICOS</h2>
                        <p>Lorem ipsum dolor, consectetur elit, sed do tempor incididunt
                      labore.</p>
                      </section>
                    </Box>
                </SwitSection>
              </section>
              <section className='imgSection' data-aos="fade-left"/>
              
          </AbContent>
        </Container>
      </>
      
  )
}

export default AboutUs