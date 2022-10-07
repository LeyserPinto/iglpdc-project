import styled from "styled-components";

/*Event container**** ***********************************/
export const EventsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/*Box To Grid Of Objects*************************************/
export const EventsBox = styled.div`
  z-index: 4;
  position: absolute;
  top: -50px;
  width: 90%;
  height: 100%;
  padding: 10px;
  display:flex;
  align-items:center;
`;


/*Event Grid Object- Scrollable Object*************************************/
export const EvGrid = styled.div`
  width: auto;
  display: grid;
  grid-template-columns: repeat(4, calc(50% - 10px));
  grid-template-rows: 100px;
  gap: 20px;
  padding:10px;
  margin:0 auto;
  transition: all 0.8s;
  overflow-x: scroll;
  @media screen and (max-width:800px) {   
    
  grid-template-columns: repeat(4, calc(50% - 10px));
  grid-template-rows: 80px;
}

@media screen and (max-width:600px) {   
    
    grid-template-columns: repeat(4, calc(100% ));
    grid-template-rows: 80px;
  }
`;


/*Event Item- Object: Content Box*************************************/
export const Item = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 4fr 0.1fr;
  grid-auto-rows:100%;
  padding: 10px;
  gap: 20px;
  border-radius: 5px; 
  box-shadow: 1px 1px 10px #0c0c0c40;
  background-color:#fff;

  /* @media screen and (max-width:500px){
    
  grid-template-columns: 1.2fr 3fr 0.5fr;
  } */
`;

/*Event Item- Object: Date*************************************/
export const Date = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    & > :first-child{
      
      width: 100%;
      height: 50%;
      color: #112D4E;  
      border-right:2px solid #F7981E;      
      font-size:1.6vw;
      font-weight:400;
      display: flex;
      align-items: flex-end;
      justify-content:center;
      @media screen and (max-width:800px) {
        font-size:calc(0.3em + 1vw);
      }
      @media screen and (max-width:600px) {   
        /* font-size:calc(1rem+2vw); */

        font-size:calc(0.4em + 1vw);
      }
    }

    &> :last-child{
      width: 100%;
      height: 50%;      
      border-right:2px solid #F7981E;      
      display: flex;
      align-items: flex-start;
      justify-content:center;
      color:#112D4E;
      font-size:1.4vw;
      font-weight:400;
      @media screen and (max-width:800px) {
        font-size:calc(0.2em + 1vw);
      }
      @media screen and (max-width:500px) {   
        /* font-size:calc(1rem+2vw); */

        font-size:calc(0.4em + 1vw);
      }
    }
`

/*Event Item- Object: Info*************************************/
export const Info=styled.div`
display: flex;
flex-direction:column;
justify-content:flex-start;
width:100%;
z-index:4;

& >h3{
  margin:0;
  color:#112D4E;  
  font-size:calc(0.6em + 1vw);
  @media screen and (max-width:500px) {   
        /* font-size:calc(1rem+2vw); */

        font-size:calc(0.7em + 1vw);
      }
}

&> p{
  margin:0;
  color:#525252;  
  font-size:calc(0.02em + 1vw);
  @media screen and (max-width:800px) {
        font-size:calc(.2rem + 1vw);
      }
      @media screen and (max-width:500px) {   
        /* font-size:calc(1rem+2vw); */

        font-size:calc(0.4em + 1vw);
      }

}
`

/*Event Item- Object: Icon IMG*************************************/
export const Icon=styled.img`
    position: absolute;
    right: -10px;
    bottom: -15px;
    opacity: 35%;
    width: 7em;
    transform: rotate(345deg);
    filter: grayscale(100%);/*Edge and Firefox*/
    -webkit-filter: grayscale(100%);/*Chrome and Safari*/  
    z-index:3;  

`