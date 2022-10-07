import styled from "styled-components";

export const TemplateContainer=styled.div`
width:100%;
height:100vh;
overflow:hidden;
position:relative;
&>.TextHeader{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:auto;
    height:35%;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#FFF;


    & > h4{
      margin:0;
      
      font-size:calc(1rem + 1vh);
      font-weight:400;
    }
    & > .h1{
      margin:0;
      font-size:calc(4rem + 1vh);
      font-weight:700;
      letter-spacing:5px;
    }
    &>p{
      margin:0;
    }
}
`

export const ContBg=styled.div`
background:-webkit-linear-gradient(45deg,#060f1ace,#02122bce),url(${props=>props.bgImg});
height:100%;
width:100%;
background-size:cover;
background-attachment:fixed;
background-position:center;
/* Add the blur effect */
filter: blur(3px);
-webkit-filter: blur(3px);
transform: scale(1.03);
`

export const GridContainer=styled.div`
margin:15px auto;
width:calc(100% - 30px);
height:100vh;
padding:15px;
overflow-x:hidden;
overflow-y:auto;
display:grid;
grid-template-columns:repeat(auto-fill,minmax(18rem,1fr));
grid-auto-rows:18rem;
gap:20px;

`

export const GridCard=styled.div`

border-radius:5px;
box-shadow:0px 0px 5px 2px rgba(0,0,0,0.2);
overflow:hidden;
position:relative;
cursor:pointer;

transition:all ease-in-out .5s;
&:hover  {
  transform:scale(1.02);
}
&:hover  .cardInfo{
  top:0%;  
  opacity:1;
}


& > .cardInfo{
  width:100%;
  height:100%;
  position:absolute;
  top:110%;
  left:0%;
  background:#060f1ace;
  opacity:0;
  overflow:hidden;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  transition:all ease-in-out .5s;
  &>img{
    height:60%;
  }
  &>p{
    color:#FFF;
    font-size:calc(0.7rem + 1vh);
  }
}
/* & > img{
  
  position:absolute;
  width:100%;
  height:100%;
  object-fit:cover;
  object-position:center;
  -o-object-fit:cover;
  -o-object-position:center;
  position:absolute;
  
  /* &::after{
      content:"";
      position:absolute;
      top:0%;
      left:0%;
      width:100%;
      height:100%;
      background:rgba(0,0,0,0.8);

  } */

`

export const ImgContainer= styled.div`

  width:100%;
  height:100%;
  position:absolute;
  top:0%;
  left:0%;
  background:url(${props=>props.imgURL});
  background-size:cover;
  background-position:center;


`