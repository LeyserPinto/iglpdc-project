import styled from "styled-components"


/**Contenedor ****************************************** */
export const Container = styled.div`
font-size: 1em;
width: 100%;
height: 100vh;
margin-top:-80px;

:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: -webkit-linear-gradient(
      to right,#112D4Ece,#1759BDce
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,#112D4Ece,#1759BDce
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    z-index: 3;
  }
`


/**Contenedor Video ****************************************** */
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index:1;
`;

/**Video Loop ****************************************** */
export const VideoLoop = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #016aff;
`;


/**Contenedor Textos ****************************************** */
export const HeroContent = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  top:60%;
  left:50%;
  transform:translateX(-50%) translateY(-60%);
  z-index:4;
`;


/**Contenedor Images ****************************************** */
export const HeroImg = styled.img`
  
  width:40vh;
  margin:30px 0;
  
`;


/**Contenedor Parrafo ****************************************** */
export const HeroP = styled.p`

  font-size: 1.5vw;

  color: #ffff;
   @media screen and (max-width: 800px) {
    display:none;
  }
`;


/**Contenedor Redes Sociales ****************************************** */
export const HeroSocial = styled.ul`
  padding:0px;
  width: 20vw;
  height:50px;
  display: flex;
  align-items:center;
  justify-content:space-evenly;
  position:relative;
  top:20%;
  left:50%;
  transform:translateX(-50%) translateY(20%);
  z-index:4;

  & > li{
    width:30px;
    height:100%;
    list-style:none;    
    display:flex;
    
  align-items: center;
  justify-content:center;
    & >a{
      z-index:5;
      color: #fff;
      font-size:1.5em;      
      & :hover{      
        transition: all 0.3s ease-in-out;
      transform:scale(1.1);
      color: #F7981E;
    }
      
    }
    

    @media screen and (max-width: 800px) {
      top:100%;
      transform:translateX(-50%) translateY(100%);
  }
  @media screen and (max-width: 500px) {
      top:100%;
      transform:translateX(-50%) translateY(100%);
  }
  }
`;