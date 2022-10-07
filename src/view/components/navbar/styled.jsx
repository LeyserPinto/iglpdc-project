import styled from 'styled-components'
import {Link as Slink } from 'react-scroll'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

/**Contenedor ****************************************** */
export const Container=styled.div`
font-size: 1em;
width: 100%;
height: 80px;
position:sticky;
top:0px;
transition: all ease-in-out 0.5s;
opacity:${({isScrolled})=>(isScrolled ? '0' : '1')};
background:${(props)=>(props.isHero ? 'transparent' : '#FFF')};
z-index:5;
`

/**Contenido ****************************************** */
export const NavContainer = styled.div`

  display: grid;
  grid-template-columns:30% auto;
  gap: 10px;
  height: 80px;
  width: 100%;
  max-width: 1280px;
  margin:0 auto;
  font-size: 1em;  
  transition: all 0.3s ease-in-out;  
  align-items:center;

  @media screen and (max-width: 800px) {    
  
    grid-template-columns:80% auto;
  }
`


/**Contenedor Brand****************************************** */
export const NavSection= styled.section`
padding-left:15px;
 font-size: calc(1em + 1vh);
 
color:${(props)=>(props.isHero ? '#FFF' : '#112D4E')};
 cursor:pointer;
  transition: all 0.2s cubic-bezier(0.001, 0, 1, 0.5);
 &:hover,:active{
  color:#F7981E
 }

`

/**Contenedor Links****************************************** */
export const Navmenu= styled.ul`

display:flex;
justify-content:flex-end;

color:${(props)=>(props.isHero ? '#FFF' : '#112D4E')};
font-weight:300;

padding-right:15px;
& > li{
    margin:0 10px;
    text-decoration:none;
    list-style:none;
    min-width:50px;
    height:auto;
    text-align:center;

    transition: all 0.2s ease-in-out;
    cursor:pointer; 
 &:hover,:active{
   transform:scale(1.1);
  color:#F7981E
 }

    
    
}

& > .DropMenu{
    position:relative;
    
    & > .submenu{
    position:absolute;
    visibility:hidden;
    width:150px;
    min-height:150px;
    background-color:#FFF;
    color:#112D4E;
    display:flex;
    flex-direction:column;
    align-self:flex-start;
    padding:0px;
    list-style:none;
    text-align:start;
    box-shadow:1px 3px 5px 5px rgba(0,0,0,0.15);
    opacity:0;
    border-radius:5px;
    transition: all 0.2s ease-in-out;
    transform:translateY(5%);
    & > li{
      margin:5px 0px 5px 10px;
      font-size:0.9em;
      &:hover{
        color:#F7981E;
      }
    }
    }
    &:hover >.submenu{ 
      visibility:visible;       
    opacity:1;
    }
}

@media screen and (max-width: 800px) {    
  
    display: none;
}

`


/**Nav Link *****************************************************/
export const Nlink=styled(Link)`
margin:0 10px;
    text-decoration:none;
    list-style:none;
    min-width:50px;
    height:auto;
    text-align:left;
    color:${(props)=>(props.isHero ? '#FFF' : '#112D4E')};
    font-weight:300;
    transition: all 0.2s ease-in-out;
    cursor:pointer; 
 &:hover,:active{
   transform:scale(1.1);
  color:#F7981E
 }
`
/**Nav Link *****************************************************/
export const SmootLink=styled(Slink)`
    margin:0 10px;
    text-decoration:none;
    list-style:none;
    min-width:50px;
    height:auto;
    text-align:center;
    color:#112D4E;
    font-weight:300;
    transition: all 0.2s ease-in-out;
    cursor:pointer; 
 &:hover,:active{
   transform:scale(1.1);
  color:#F7981E
 }
`

/**Contenedor Mobile Icons****************************************** */
export const MobileIcon = styled.nav`
  display: none;

  @media screen and (max-width: 800px) {
    display:flex;
justify-content:flex-end;

padding-right:15px;
color:${(props)=>(props.isHero ? '#FFF' : '#112D4E')};
    font-size: 1.8rem;
    cursor: pointer;
  }
`;


//******************************************** */
//
//
//          SIDE BAR 
//
//

export const Scontainer=styled.div`
position: fixed;
z-index:20;
width:calc(100% - 40px);
height:calc(100% - 40px);
top:${({isOpen})=>(isOpen) ? "0%":"-100%"};
left:0%;
background: #ffffff;
transition:all 0.6s ease-in-out;
padding:20px;
`

export const Sheader=styled.div`
width:calc(100% - 20px);
height:10%;
padding:0px 10px;
display:flex;
align-items:center;
justify-content:space-between;

& > h2{
  font-size: calc(0.7rem + 1vh);
  color: #1759BD;
}
`
export const Scloseicon = styled(FaTimes)`
  
  font-size: calc(1rem + 1vh);
  color: #1759BD;
  transition:all ease-in-out 0.5s;

  &:hover,&:active{    
    color: #F7981E;
    transform:rotate(360deg);
  }
`;

export const Smenu=styled.ul`
padding:10px 0px;
margin:0 auto;
width:100%;
height:calc(70% - 20px);
list-style:none;
display:flex;
flex-direction:column;
align-items:center;
text-align:center;

//LI items *************
& > li{
    cursor:pointer; 
    font-size:calc(.7rem + 1vh);
    color:#1759BD;
    
  transition:all ease-in-out 0.5s;
  &:not(:last-child){
    margin-bottom:5px;
  }
 &:hover,:active{
   transform:scale(1.15);
   border-bottom:thin solid #F7981E;
    color:#F7981E
 }

    
    
}




`
export const Swidget=styled.div`
width:100%;
height:10%;
display: flex;
justify-content:space-evenly;

& > li{
    list-style:none;    
    & >a{
      color: #F7981E;
      font-size:1.5em;      
      
      transition: all 0.3s ease-in-out;
      & :hover{      
      transform:scale(1.1);
      color: #1759BD;
    }
      
    }
    

    
  }
`
export const Sfooter=styled.div`
width:100%;
height:10%;
display:flex;
justify-content:center;
align-items:center;
text-align:center;
font-size:0.6em;
`