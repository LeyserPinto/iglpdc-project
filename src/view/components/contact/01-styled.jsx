import styled from "styled-components";

export const CContainer=styled.div`
width:100%;
height:50vh;
background:-webkit-linear-gradient(45deg,#112D4Ece,#1759BDce),url(${props=>props.source});
background-size:cover;
background-position:center;
background-attachment:fixed;
margin-bottom:50px;
padding:50px 0px;
`
export const Ccontent=styled.div`
margin:0 auto;
width:calc(90% - 20px);
height:calc(95% - 20px);
padding:10px;
display:grid;
grid-template-columns:30% auto;

& > .cCard{
    padding:20px;
}
& > .cText{
    display:flex;
    align-items:center;
}
`


export const ContactCard=styled.div`
margin: 0 auto;
width:calc(100% - 60px);
height:calc(100% - 10px);
background-color:#FFF;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:10px 0; 
border-radius:10px;
transform:translateY(0);
animation: spring-1 infinite  3s linear ;
& > .icon{
    font-size:calc(2.5rem + 1vh);
    color:#112D4E;
}
& > h3{
    margin:5px 0px;
    color:#F7981E;
}

& > .t1{
    color:#112D4E;
    margin:5px 0px;
    font-size:calc(0.4rem + 1vh);
}

@keyframes spring-1 {
    0%{
        transform:translateY(0%);
    
    }
    25%{
        transform:translateY(5%);
    }
    50%{
        transform:translateY(0%);
    }
    75%{
        transform:translateY(-5%);
    }
    100%{
        transform:translateY(0%);
    }
}

`

export const ContactText=styled.div`
width:80%;
height:90%;
display:flex;
flex-direction:column;
justify-content:center;
& > h4{
    font-size:calc(0.8rem + 1vh);
    font-weight:600;
    margin: 0;
    color:#F7981E;
}
& > h2{
    font-size:calc(1.3rem + 1vh);
    margin: 0;
    color:#FFF;
    position: relative;
    &::before{
        
        content:"";
        position:absolute;
        width:100px;
        height:20px;
        top:45%;
        left:0;
        border-bottom:5px solid #F7981E;
    }
}

& > p{
    color:#FFF;
}

& > button{
    width:150px;
    height:40px;
    border:thin solid #FFF;
    background:transparent;
    font-size:calc(0.5rem + 1vh);
    color:#FFF;
    border-radius:5px;
    cursor:pointer;
    transition:all 0.4s ease-in-out;
    &:hover{
        transform:scale(1.06);        
    color:#F7981E;
    border-color:#F7981E;
    }

}
`