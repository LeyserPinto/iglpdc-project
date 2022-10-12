import React,{useEffect, useState} from 'react'
import { ScrollRestoration } from 'react-router-dom';
import { Navbar,SideBar } from '../components/navbar/navbars'
import Spiner from '../components/spiner/spiner'
import AOS from 'aos';
import {ContHistory,AbHeader,AbPasGrid} from '../components/about/t2-styled'
import avatar from '../assets/images/vector1137.jpg'
const About = () => {
  const [isLoading, setIsLoading]=useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setisScrolled]=useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };


//AOS animation library Init
  AOS.init({ duration: 1000, delay: 200 });
  //USE EFFECTS HOOKS
  useEffect(() => {
    
    window.onscroll = () => {
      window.oldScroll > window.scrollY ? setisScrolled(false) : setisScrolled(true);
      window.oldScroll = window.scrollY;
  }})

  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false)
    }, 2000);

    return setIsLoading(true);
  },[])


  return (
    <>
    <Spiner isVisible={false}/>
    <SideBar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} isScrolled={isScrolled} isHero={false} />
    <ContHistory>
      
      <div className='cHeader'>
        <h3>La Iglesia Puertas Del Cielo</h3>
      </div>
      <div className='container'>
      <div className='tBox' data-aos="flip-left" data-aos-delay="100">        
        <p>Es una Organización Cristiana sin fines de lucro, fundada en el año 1999, en la ciudad de Anaco, Municipio Anaco Estado Anzoátegui</p>
      </div>
      <div className='tBox' data-aos="flip-right" data-aos-delay="500">        
        <p>Su Fin es contribuir y aportar ayuda de todo tipo a las personas e instituciones más necesitadas, como ejemplo Casa hogares de la Localidad y del Estado</p>
      </div>
      <div className='tBox' data-aos="flip-left" >        
        <p>A lo largo de los años hemos logrado cumplir metas de manera responsable y con honestidad, aun con los escasos recursos, en medio de una situación y entornos de permanentes cambios y dificultades</p>
      </div>
      <div className='tBox' data-aos="flip-right" >        
        <p>Nuestra Base es ayudar a la comunidad en las areas más importantes y necesarias, tales como la alimentación, salud vestido,calzado, educación y materiales para el estudio de la Palabra</p>
      </div>
      </div>
    </ContHistory>

    <AbHeader>
          <p>Nuestros</p>
          <h1>Pastores</h1>
    </AbHeader>
    <AbPasGrid>
      <section>
        <img src={avatar} />
        <div className='bFoot'>
          <p>Pastores Name</p>
          <p>Sede Anaco</p>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </AbPasGrid>
    <ScrollRestoration />
    </>
  )
}

export default About