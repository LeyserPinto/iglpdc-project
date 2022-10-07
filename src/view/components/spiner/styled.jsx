import styled from "styled-components";



export const Container=styled.div`
width:100%;
height:100vh;
position:fixed;
background-color:white;
top:0;
left:0;
overflow:hidden;
transition: all ease-in-out .5s;
opacity:${({isVisible})=>(isVisible ? 1 : 0)};
visibility:${({isVisible})=>(isVisible ? 'visible' : 'hidden')};
z-index:${({isVisible})=>(isVisible ? '15' : '-2')};
`

export const Spin=styled.div`
overflow:hidden;
height:auto;
position:absolute;
top:50%;
left:50%;
transform:translate(-50%,-50%);
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:center;


`

export const SpinImg=styled.img`
height:30vh;
margin-bottom:20px;
animation: fadeAnimation 3s infinite ease-in-out;
@keyframes fadeAnimation {
    0%{
        opacity:0;
    }
    50%{
        opacity:1;
    }
    100%{
        opacity:0;
    }
}

`
export const BlockSpins=styled.div`
height:40px;
width:calc(100%);
display:flex;
justify-content:center;


& > div
{
    width:18px;
    height:100%;
    background:#1759BD;
    margin:0px 10px;
    transform:scale(1,--scale);
    /* transform:scale(0, calc(var(--translation) * 1%)); */
   animation: spinner-fzua35 1s calc(var(--delay) * 1s) infinite ease;
}
& div:nth-child(1) {
   --delay: 0.1;
   --scale: 102;
}

& div:nth-child(2) {
   --delay: 0.3;
   --scale: 102;
}

& div:nth-child(3) {
   --delay: 0.5;
   --scale: 102;
}
@keyframes spinner-fzua35 {
   0%, 10%, 20%, 30%, 50%, 60%, 70%, 80%, 90%, 100% {       
    transform:scale(1,calc(var(--scale)*1%));
   }

   50% {
    transform:scale(1,calc(var(--scale)*1.5%));
    
    background:#112D4E;
   }
}
`
