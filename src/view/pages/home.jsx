import React,{useState, useEffect} from 'react'
import { ScrollRestoration } from 'react-router-dom'
import AboutUs from '../components/about/about'
import Donate from '../components/donate/donate'
import Events from '../components/events/events'
import Hero from '../components/hero/hero'
import {Navbar,SideBar} from '../components/navbar/navbars'
import {HomeContent} from '../components/content/content'
import {TeamsSection} from '../components/teams/teams'

import '../styles/App.css'
import Spiner from '../components/spiner/spiner'




const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setisScrolled]=useState(false);
  const [isHero, setIsHero]=useState(true);
  const [isLoading, setIsLoading]=useState(true);
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  
  function haveError(){  
    setIsLoading(true);
  }

  //USE EFFECTS HOOKS
  useEffect(() => {
    
    window.onscroll = () => {
      window.oldScroll > window.scrollY ? setisScrolled(false) : setisScrolled(true);
      window.oldScroll < 100 ? setIsHero(true): setIsHero(false);
      window.oldScroll = window.scrollY;
  }})

  useEffect(() => {
    
    setTimeout(()=>{
      setIsLoading(false)
    },4000)
  })
  



  return (

    <>
    <Spiner isVisible={isLoading}/>
    <SideBar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} isScrolled={isScrolled} isHero={isHero} />
    <Hero  />
    <Events haveError={haveError} />
    <AboutUs />
    <Donate />
    <TeamsSection haveError={haveError}/>
    <HomeContent haveError={haveError} />
    
    <ScrollRestoration />
    </>
  )
}

export default Home