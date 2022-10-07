import styled from "styled-components";

export const Contblock=styled.div`
margin: 0 auto;
width:100%;
max-width:1200px;
min-height:80vh;
height:auto;
display:grid;
grid-template-columns:75% 25%;
@media screen and (max-width:800px) {
  grid-template-rows:75% 25%;
}
`
export const TopCont=styled.div`
padding:10px 20px;
display:grid;
grid-template-columns:repeat(auto-fill,minmax(15rem, 1fr));
grid-auto-rows:300px;
gap:25px;
`

export const SideCont=styled.div`
height:auto;
padding:0px 0px 0px 5px;

& > h4{  
  margin:10px 0px;
  font-size:calc(0.8rem + 1vh);
  color:#112D4E;
}
& > .outer{
  width:calc(100% - 20px);
  height:auto;
  padding:0px 0px 0px 15px;
  & > h5{
    color:#F7981E;
    font-weight:500;
    margin:10px 0px;
    font-size:calc(0.8rem + 1vh);
  }
}
`
export const Box=styled.li`
width:100%;
min-height:2rem;
height:auto;
margin-bottom:10px;
color:#112D4E;
cursor:pointer;
list-style:circle;

& > p{
  margin:0;
  text-transform:capitalize;
  transition:all ease-in-out .2s;
  &:hover{
    color:#F7981E;
    transform:scale(1.02)
  }
}
`
export const PrCard=styled.div`
border-radius:10px;
border-bottom: 5px solid #112D4E;
box-shadow:2px 2px 10px 3px rgba(0,0,0,0.2);
overflow:hidden;
cursor:pointer;
transition: all ease-in-out .5s;
&:hover{

    
    transform:scale(1.04);
    &>:first-child{
        transform:scale(1.05);
    }
}
`

export const PrImg=styled.div`
width:100%;
height:55%;
background: url(${props=>props.source});
background-size:cover;
transition: all ease-in-out .5s;

`

export const PrText=styled.div`
margin:5px auto;
width:90%;
height:calc(40% - 10px);
overflow:hidden;
& > h3{
        margin:0;
        color:#112D4E;
        font-size:calc(0.8rem + 1vh);
        text-transform:capitalize;
        @media screen and (max-width:600px) {
          font-size:calc(0.5rem + 1vh);
        }
      }
      &> p{
        margin:0;
        font-size:calc(0.3rem + 1vh);
        display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
      }
      & > h6{
        margin:0;
        color:#F7981E;
        text-transform:capitalize;
        font-size:calc(0.5rem + 1vh);
      }
`