import React,{useEffect, useState} from 'react'
import { ScrollRestoration } from 'react-router-dom';
import { Navbar,SideBar } from '../components/navbar/navbars'
import Spiner from '../components/spiner/spiner'
import { TeamTemplate } from '../components/teams/teams';
const TeamPage = () => {

  const [isLoading, setIsLoading]=useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setisScrolled]=useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
        
        <Spiner isVisible={isLoading}/>  
        <SideBar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} isScrolled={isScrolled} isHero={false} />
        <TeamTemplate />        
        <ScrollRestoration />
      </>
  )
}

export default TeamPage