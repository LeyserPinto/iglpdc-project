import styled from "styled-components";
import {Link} from 'react-router-dom';
import People from "../../assets/images/womans.webp"

//Container
export const MinContainer = styled.div`
width:100%;
min-height:70vh;
height:auto;
background:#FFF;
`;


//Header
export const MinHeader = styled.div`
width:80%;
//border:1px solid #0c0c0c;
margin: 10px auto;
display:flex;
flex-direction:column;
align-items:center;

& > h1{
    margin:0;
  position:relative;
color:#112D4E;
&::before{
  content:" ";
  position:absolute;
  top:50%;
  left: -40%;
  width: 70px;
  height:4px;
  background-color:#F7981E;
}
&::after{
  content:" ";
  position:absolute;
  top:50%;
  right: -40%;
  width: 70px;
  height:4px;
  background-color:#F7981E;
}


}

& > p{
    margin:0;
  color:#F7981E;
  }


  @media screen  and (max-width:800px){
  overflow:hidden;
}
`;


//People IMG
export const MinPeople= styled.div`
width:100%;
height:300px;
background:url(${People});
background-size: cover;
background-position:50% 70%;
`
//Slider Ministerios
export const MinSlider=styled.div`  
  max-width: 1200px;  
  width: calc(100% - 20px);
  min-height:150px;
  height:auto;
  margin:0 auto;
  padding:10px;
  
  overflow:hidden;
`


//slider content
export const Slidercont=styled.section`
  width: calc(100% - 10px);
  
  padding:10px 5px;  
  overflow-x:scroll;

  &>#sli{
    width:auto;
    height:auto;
    display:grid;
    grid-template-columns:repeat(13,calc(250px - 10px));
    grid-template-rows:300px;
    gap:20px;
    transition: all .8s ease-in-out;  
    overflow-y:none;

    @media screen and (max-width:700px){
      
    grid-template-columns:repeat(13,calc(50% - 10px));
    }
    @media screen and (max-width:500px){
      
      grid-template-columns:repeat(13,calc(100% - 10px));
      }
  }
`


//Card
export const MinCard=styled.div`
  border-radius: 5px;
  box-shadow: 0px 0px 7px 4px rgba(0,0,0,0.05);
  display:grid;
  grid-template-rows:60% 30% 10%;
  grid-template-columns:100%;  

  overflow:hidden;
  & > .cardimg{
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    position:relative;
    //Img Card Child
      & > img{
          height:60%;
          object-fit:cover;
          object-position:center;
          z-index:3;
        }
  }
        
  & > .cardtext{
    padding:10px;
    overflow:hidden;
    & > h4{
      margin:0;
      font-size:calc(1rem + 1vh);
      color:#112D4E;
    }
    & > p{
      margin:0;
      font-size:calc(0.5rem + 1vh);


    }
    @media screen and (max-width:1000px){
      & > h4{
      font-size:calc(0.8rem + 1vh);
    }
    & > p{
      font-size:calc(0.3rem + 1vh);

      
    }

    }
    

  }

`

export const Cardimg=styled.div`
 width:100%;
 background:url(${props=>props.source});
 background-size:cover;
 background-position:center;
position:relative;
  filter:blur(1px);
  &::after{
            content:"";
            position:absolute;
            top:0%;
            left:0%;
            width:100%;
            height:100%;
            background:#060f1aae;
          }
`
export const CardImage=styled.div`
 width:100%;
 height:100%;
  background:url(${props=>props.source});
 background-size:cover;
 background-position:center;
 position:absolute;
 filter:blur(1px);
 &::after{
            content:"";
            position:absolute;
            top:0%;
            left:0%;
            width:100%;
            height:100%;
            background:#060f1aae;
          }

`
export const MinLink=styled(Link)`
      margin:0 auto;
      font-size:calc(0.6rem + 1vh);
      border:none;
      background:none;
      cursor:pointer;

      color:#112D4E;

      &:hover,:active{
        color: #f7981e;
      }

      @media screen and (max-width:1000px){
      
    & {
      font-size:calc(0.4rem + 1vh);
      }

    }
`