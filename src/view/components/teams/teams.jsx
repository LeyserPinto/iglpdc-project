import React,{useState,useEffect} from 'react'
import { MinContainer,MinHeader,MinPeople,MinSlider,Slidercont,MinCard,MinLink,CardImage } from './t-01styled'
import { TemplateContainer,ContBg,GridContainer,GridCard,ImgContainer } from './t-02tyled'
import Logo from "../../assets/images/Logo.png"
import { GetMin,IMGURL } from '../../../Services/services'
import {GetAllMin} from '../../../Services/services.home'
import { useLocation } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

//*Principal in Home
export const TeamsSection = ({haveError}) => {
  AOS.init({ duration: 1000, delay: 200 });

  const [TObject,setTeams]=useState([])
  useEffect(() => {
    
    GetAllMin(haveError).then(res=>{
      if( res.status=== 200){
        setTeams(res.data);
      }
      else{
        console.log(res.status);
      }
    })

  
  }, [])
  
  return (
    <MinContainer name="team" >
        <MinHeader>
          <p>Nuestros</p>
          <h1>Ministerios</h1>
        </MinHeader>
        <MinPeople />
        <MinSlider>
          <Slidercont>

            <div id='sli'>

              {Object.keys(TObject).length!=0 ?              
              
              
                TObject.id.map((row,i)=>{
                  
                  return(
                    <MinCard key={TObject.id[i]} data-aos="fade-left">
                        <section className='cardimg'>
                          <CardImage source={IMGURL+'/team/'+TObject.id[i]+'-'+TObject.name[i]+'-iglpdc.webp' } />
                        {/* <Cardimg source={IMGURL+'/team/'+TObject.id[i]+'-'+TObject.name[i]+'-iglpdc.webp'} /> */}
                        <img src={Logo} />
                          
                        </section>
                        <section className='cardtext'>
                          <h4>{TObject.name[i]}</h4>
                          <p>{TObject.des[i]}</p>                        
                        </section>
                        <MinLink to={`/Teams`} state={{Ministerio:`${TObject.id[i]}`}}>Ver Mas</MinLink>
                    </MinCard>
                  )
                  i+=1;
                })
                
              :(
                <MinCard>
                <section className='cardimg'>
                  <img src={Logo} />
                </section>
                <section className='cardtext'>
                <h4>Empty</h4>
                <p>The lorem text the section that contains header.</p>
                </section>              
                </MinCard>
              )}
             
            </div>
          </Slidercont>
        </MinSlider>

    </MinContainer>
  )
}





export const TeamTemplate = () => {  
  const location = useLocation();
  const [minObject,setMinObject]=useState([]); 

  
  useEffect(() => {    

    setisLoading(true);
    GetMin(location.state.Ministerio).then(res=>{    
      if(res.status===200){
        setMinObject(res.data)         
      }else{             
          console.log(res.status)
      }
  });
  },[])

  return (
    <>
    
    
    <TemplateContainer>
      <ContBg bgImg={IMGURL+'/team/'+minObject.minid+'-'+minObject.name+'-iglpdc.webp'}/>

      <div className='TextHeader'>
        <h4>Equipo De</h4>
        <p className='h1'>{minObject.name}</p >
        <p>{minObject.description}</p>
      </div>
    </TemplateContainer>

    <GridContainer>
      {
      Object.keys(minObject).length!=0?
      (
        minObject.galeryPath.map((row,i) =>{
            return(              
              <GridCard key={minObject.id[i]}>
                <ImgContainer  className='cardimg' imgURL={IMGURL+'/gallery/'+ row}/>
                <section className='cardInfo'>
                <img src={Logo} />
                <p>{minObject.infoImg[i]}</p>
                </section>
              </GridCard>
            )
            i+=1;
        })
      ):(
        

    <GridCard>
    <section  className='cardimg'/>
    <section className='cardInfo'>
    <img src={Logo} />
    <p>Imagen Info</p>
    </section>
  </GridCard>
      )
      

      }          

    </GridContainer>
    
    </>
  )
}