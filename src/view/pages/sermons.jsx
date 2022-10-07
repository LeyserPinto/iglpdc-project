import React,{useEffect,useState} from 'react'
import { ScrollRestoration } from 'react-router-dom';
import { MainPage } from '../components/content/content'
import {Navbar,SideBar} from '../components/navbar/navbars'
import Spiner from '../components/spiner/spiner'
import { useLocation } from 'react-router-dom';

import {GetContent,GetContentOp} from '../../Services/services.content'
const Sermons = () => {
  const location = useLocation();
  const [isLoading, setIsLoading]=useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setisScrolled]=useState(false);
  const [AxiosOb, setAxiosOb]=useState({})
  const [AxiosOb2, setAxiosOb2]=useState({})
  const toggle = () => {
    setIsOpen(!isOpen);
  };


  //AXIOS API FETCH OPERATION
  useEffect(() => {
    
      if(location.state.sendTo==1){
        GetContent(location.state.sendTo).then(res=>{
          setAxiosOb(res.data);
        })
        setTimeout(()=>{
          GetContentOp(2).then(res=>{
            setAxiosOb2(res.data);
          })
        },3000)
      }
    
    
  }, [])
  

  //NAV BAR OPERATION
  useEffect(() => {
    
    window.onscroll = () => {
      window.oldScroll > window.scrollY ? setisScrolled(false) : setisScrolled(true);
      window.oldScroll = window.scrollY;
  }})
//SPINER OPERATION
  useEffect(()=>{

    setTimeout(() => {
      setIsLoading(false)
    }, 4000);

    return setIsLoading(true);
  },[])


  //RENDER
  return (
    <>
    
    <Spiner isVisible={isLoading}/>
    <SideBar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} isScrolled={isScrolled} isHero={false} />
    <MainPage AxiosOb={AxiosOb} AxiosOb2={AxiosOb2}/>    
    <ScrollRestoration />
    </>
  )
}

export default Sermons