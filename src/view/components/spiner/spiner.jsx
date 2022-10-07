import React from 'react'
import Logo from '../../assets/images/Logo.png'
import { Container,Spin,SpinImg,BlockSpins } from './styled'



const Spiner = ({isVisible, isDrop}) => {
  return (
    <Container isVisible={isVisible} isDrop={isDrop}>
      <Spin>
               
        <SpinImg src={Logo}/>
        <BlockSpins>          
          <div></div>   
          <div></div>    
          <div></div> 
        </BlockSpins>
      </Spin>
      
    </Container>
  )
}

export default Spiner