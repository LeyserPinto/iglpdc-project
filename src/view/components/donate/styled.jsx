import styled from 'styled-components'

import Wave from '../../assets/images/wave.webp'

import Childs from '../../assets/images/childs-nohome.webp'

export const Container=styled.div`
margin-top:15px;
width:100%;
height:100vh;
background: -webkit-linear-gradient(45deg,#112D4Ece,#1759BDce),url(${Childs});
background-position: center;
background-size: cover;
background-attachment:fixed;
overflow:hidden;
position:relative;
& > .Wave{
  height:80px;
  width:100%;
  position:absolute;
  bottom:0%;
  left:0;
  background: url(${Wave});
  background-size:100% 80px;
}

@media screen and (max-width: 400px) {
  
height:100vh;

& > .Wave{
  height:60px;
  bottom:-0%;
  background-size:100% 60px;
}
}
`

//Grid
export const DonContent=styled.div`
  margin: 0 auto;
  width: calc(80% - 20px);
  height: calc(90% - 20px);
  display: grid;
  grid-template-columns: repeat(2,50%);
  grid-template-rows:100%;
padding:10px;
  @media screen and (max-width:700px) {
      
  width: calc(100% - 20px);
    grid-template-columns:100%;
    grid-template-rows: repeat(2,50%);
  }


  & > .donlogo{

    display:flex;
    justify-content:center;
    align-items:center;
    
    overflow:hidden;
      & > img{
          height: 70%;
          object-fit:cover;
          
      }
  }

  & > .dontexts{
      display:flex;
      flex-direction:column;
      justify-content:center;
        &>.h6{
            font-family:'Montserrat';
           font-size:calc(1rem + 1vh);
           color:#FFF;
           letter-spacing:10px;
           margin:0;
           @media screen and (max-width:400px) {      
            
           font-size:calc(0.7rem + 1vh);
            }
        }
       &>h4{
        font-family:'Montserrat';
           font-size:calc(3rem + 3vh);
           color:#FFF;
           letter-spacing:4px;
           margin:0;
           @media screen and (max-width:400px) {      
            
            font-size:calc(2.5rem + 2.5vh);
             }
       }
       & > p{
           font-family:'Montserrat';
           font-size:calc(0.5rem + 1vh);
           color:#FFF;
           margin:0;
           
       }
       @media screen and (max-width:700px) {      
      align-items:center;
      text-align:center;
      }
  }
`

export const DonBtns=styled.div`
margin-top:20px;
width:100%;
height:auto;
display:flex;

justify-content:flex-start;

& > button{
    width:auto;
    min-width:100px;
    background:transparent;
    cursor:pointer;
    padding:5px;
    margin: 0px 10px;
    font-size:calc(0.6rem + 1vh);
    outline:none;
    border: thin solid white;
    color:white;
    font-weight:600;
    transition: all ease-in-out .3s;
    &:hover, :active{
        color:#F7981E;
        
    border: thin solid #F7981E;
    transform: scale(1.15);
    }

}
@media screen and (max-width:700px) {      
    margin-top:10px;
    
justify-content:center;
      }
`

