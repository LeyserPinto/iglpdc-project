import styled from "styled-components";

export const ContHistory=styled.div`

width:100%;
height:auto;
padding-top:25px;
& > .cHeader{
    width:60%;
    height:50px;
    margin: 0 auto;
    display:flex;
    justify-content:center;
    align-items:center;
    border-top: thin solid #112D4E;
    border-bottom: thin solid #112D4E;

    & h3{
        font-size:calc(1rem + 1vh);
        font-weight:400;
        color:#112D4E;
    }
}
& > .container{
    margin: 0 auto;
    width:60%;    
    min-height:100vh;
    height:auto;
    overflow:hidden;
    
    & .tBox{
    width:350px;
    height:150px;
    border-radius:5px;
    border: thin solid #112D4E;
    box-shadow:0px 0px 5px 3px rgba(0,0,0,0.1);
    margin:15px;
    clear:both;
    position:relative;
    padding:10px;

    & p{
        font-size:calc(0.65rem + 1vh);
        color:#112D4E;
    }
    
}
& >:nth-child(even){
    float:right;
    & ::after{
        content:"";
        position:absolute;
        width:5px;
        height:100%;
        top:0;
        left:-3%;
        border-left:4px solid #F7981E;
    }
    
}
& >:nth-child(odd){
    float:left;
    & ::after{
        content:"";
        position:absolute;
        width:5px;
        height:100%;
        top:0;
        right:-3%;
        border-right:4px solid #F7981E;
    }
}
}


`


//Header
export const AbHeader = styled.div`
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
  left: -50%;
  width: 70px;
  height:4px;
  background-color:#F7981E;
}
&::after{
  content:" ";
  position:absolute;
  top:50%;
  right: -50%;
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

//Pastores Grid
export const AbPasGrid = styled.div`
width:90%;
max-width:1200px;
margin: 10px auto;
overflow:hidden;
display:grid;
grid-template-columns:repeat(4,calc(25% - 40px));
grid-auto-rows:350px;
justify-content:center;
gap:15px;
padding:10px;
&  section{
    border:1px solid #0c0c0c;
    position:relative;
    & > img{
        width:100%;
        height:100%;
        object-position:center;
        object-fit:cover;
        -o-object-fit:cover;        
        -o-object-position:center;
    }

    & > .bFoot{
        position:absolute;
        bottom:0;
        width:100%;
        height:70px;
        background-color:#00152F;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        flex-wrap:nowrap;
        & > p{
            margin:0;
        }
    }
}


`;