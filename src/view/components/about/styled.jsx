import styled from "styled-components";
import aboutimg from '../../assets/images/about.webp'
//Contenedor ******************************
export const Container=styled.div`
width:100%;
min-height:60vh;
height:auto;

`
//Contenido Maqueter
export const AbContent=styled.div`
width:90%;
max-width:1300px;
height:auto;
margin:0 auto;
display:grid;
grid-template-columns:repeat(2,50%);
grid-template-rows:auto;
gap:20px;

&> .imgSection{
    background:url(${aboutimg});
    background-size:cover;
    position:relative;
    box-shadow:2px 2px 4px 2px rgba(0,0,0,0.3);
    /* &::before{
        content:"";
        width:100%;
        height:100%;
        border:#F7981E;
        position:absolute;
        top:10px;
        left:10px;
        z-index:-1;
        border-radius:10px;
    }
    &::after{
        content:"";
        width:100%;
        height:100%;
        background-color:#112D4E;
        position:absolute;
        top:15px;
        left:15px;
        z-index:-2;
        border-radius:10px;
    } */

    
    
}

@media screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    
    &> .imgSection{
        display:none;
    }
}
`


//Header, Here Title Top Line y Description
export const Header=styled.section`
width:100%;
& >:nth-child(1){
    margin:0px;    
    font-size:calc(1rem + 1vh);
    color: #F7981E;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;

}
& >:nth-child(2){
    margin:0px;
    font-size:calc(2.3rem + 2vh);
    color: #112d4e;
    
}
& >:nth-child(3){
    margin:0px;
}
`

//Icons and Info of Actions
export const SwitSection=styled.section`
width:100%;
height:auto;
display:grid;
grid-template-columns:repeat(2,calc(50% - 20px));
grid-template-rows:auto;
gap:20px;
padding:20px 5px;
overflow:hidden;

@media screen and (max-width: 500px) {
    grid-template-rows:repeat(2,calc(50% - 20px));
grid-template-columns:1fr;
}
`
//Child of SwitSection, Box of action
export const Box=styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:10px;
box-shadow:0px 2px 8px 4px rgba(0,0,0,0.1);
border-radius:10px;
& > .iconSection {
    width:3.12rem;
    height:3.12rem;    
    font-size:2.5em;    
    border:thin solid #112D4E;  
    color: #112D4E;
    cursor: pointer;
    padding:15px;
    border-radius:50%;
    text-align:center;
    transition: all 0.3s cubic-bezier(0.6, 0.04, 0.98, 0.335);
    &:hover{
        transform: scale(1.12);
        color: #F7981E;
        border:thin solid #1759BD;
    }
    
}

& > .textSection{
    & > h2{
    font-size:calc(1rem + 1vh);
    color:#F7981E;
    }
    & > p{
    margin:0px;
    font-size:calc(0.4rem + 1vh);
    color:#112D4E;
    }
}
`