import styled from "styled-components";


export const Container = styled.div`
width:100%;
min-height:90vh;
height:auto;

`

//Header
export const ContHeader = styled.div`
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
  left: -55%;
  width: 70px;
  height:4px;
  background-color:#F7981E;
}
&::after{
  content:" ";
  position:absolute;
  top:50%;
  right: -55%;
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


export const Contenedor = styled.div`
  margin: 0 auto;  
  max-width: 1120px;
  width:100%;  
  height:auto;
  
`

export const RowSection = styled.div`
    display: grid;
    grid-template-columns:30% 70%;
    overflow:hidden;
    padding-top:10px;
  //Media query Grid Layout
  @media screen and (max-width:800px) {
    grid-template-rows:100px auto;    
    grid-template-columns:1fr;
  }
  & > .textSection{
    padding:20px 0px 0px 15px;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
    & h1{
      margin:0;      
      color:#112D4E;
      font-size:calc(1.3rem + 1vh);
    }
    @media screen and (max-width:800px) {
    
      align-items:center;
      justify-content:center;
  }
  }

  //Seccion de Items
  & > .itemSection{
    display: grid;
    gap:15px;
    grid-template-columns:repeat(2,calc(50% - 10px));
    grid-auto-rows:100px;
    
    margin-bottom:15px;
    @media screen and (max-width:600px) {      
    grid-auto-rows:80px;    
    grid-template-columns:0.9fr;
    justify-content:center;
  }
  }
`
export const Item = styled.div`
    
    display:grid;
    grid-template-columns:30% 65%;
    overflow:hidden;
    border-radius:5px;
    box-shadow:0px 0px 5px 1px rgba(0,0,0,0.2);
    cursor:pointer;
    transition:all ease-in-out .3s;
    &>.text{
      overflow:hidden;
      padding-left:5px;
      & > h3{
        margin:10px 0px;
        color:#112D4E;
        font-size:calc(0.6rem + 1vh);
        text-transform:capitalize;
        @media screen and (max-width:600px) {
          font-size:calc(0.5rem + 1vh);
        }
      }
      & > h6{
        margin:0;
        color:#F7981E;
        text-transform:capitalize;
        font-size:calc(0.5rem + 1vh);
      }
    }

    &:hover{
      transform:scale(1.05);
    }
`

export const Itemimg=styled.div`
background:url(${props=>props.source});
background-size:cover;
background-position:center;
`

