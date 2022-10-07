import React from 'react'
import { Container,DonContent,DonBtns } from './styled'
import Logo from '../../assets/images/Logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Donate = () => {
  AOS.init({ duration: 1000, delay: 200 });
  return (
    <Container>
      <DonContent>
        <section className='donlogo'>
          <img src={Logo} data-aos="flip-right" />
        </section>

        <section className='dontexts'>
          <p className='h6' data-aos="fade-right">Realiza Tu</p>
          <h4 data-aos="fade-left">Donación</h4>
          <p data-aos="fade-right">"Cada uno debe dar según el deseo de su corazón, No con tristeza, ni
            por Necesidad, ¡Dios Ama al que da con Alegría!" 2 CORINTIOS 9:7</p>

          <DonBtns>              
              <button data-aos='fade-up'>Fundación</button>
              <button data-aos='fade-down'>Donar</button>
          </DonBtns>
        </section>      
      </DonContent>
      <section className='Wave'></section>
    </Container>
  )
}

export default Donate