import React from 'react'
import { CContainer,Ccontent,ContactCard,ContactText } from "../contact/01-styled";
import Bg from '../../assets/images/iglesia.webp'
import { GiBugleCall } from "react-icons/gi";
const HomeContact = () => {
  return (
      <>
    <CContainer source={Bg}>
       <Ccontent>
           <section className='cCard'>
               <ContactCard>                   
                   <GiBugleCall className='icon'/>
                   <h3>Contactanos!</h3>
                   <p className='t1'>6003 Anaco Anzoátegui, VEN</p>
                   <p className='t1'>+58 (282) 422 xxxx</p>
                   <p className='t1'>contacto@iglpdc.com</p>
               </ContactCard>
           </section>
           <section className='cText'>
               <ContactText>
                   <h4>No lo Dudes</h4>
                   <h2>En un toque, Puedes Contactarnos</h2>
                   <p>Sientete libre de hablar con nosotros. Estamos disponibles para atender tu petición</p>
                   <button>Contactar</button>
               </ContactText>
           </section>
        </Ccontent> 
    </CContainer>
    </>
  )
}

export default HomeContact