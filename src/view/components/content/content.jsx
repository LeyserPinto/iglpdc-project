import React, { useState, useEffect } from 'react'
import { Container, ContHeader, Contenedor, RowSection, Item, Itemimg } from './cont-styled01'
import { TopCont, PrCard, PrImg, PrText, SideCont, Contblock,Box } from './cont-styled02'
import Content from '../../assets/images/Content.webp'
import Logo from '../../assets/images/Logo.png'
import { GetPr, GetEst } from '../../../Services/services.home'
import { IMGURL } from '../../../Services/services.env'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const HomeContent = () => {

  const [ObjPr, setObjPr] = useState({});
  const [ObjEst, setObjEst] = useState({});

  
  
  useEffect(() => {


    //API For Predicas
    GetPr(1).then(res => {

      setObjPr(res.data);
    })
    //API For Estudios

    setTimeout(() => {
      GetEst(2).then(res => {

        setObjEst(res.data);
      })
    }, 2000)


  }, [])

  return (
    <>
      <Container>
        {/* Header */}
        <ContHeader>
          <p>Nuestro</p>
          <h1>Contenido</h1>
        </ContHeader>
        {/* Contenedor */}
        <Contenedor>


          {/* Predicas */}
          <RowSection>
            <section className='textSection'><h1>Predicas</h1></section>
            <section className='itemSection'>

              {
                Object.keys(ObjPr).length != 0 ?


                  Object.keys(ObjPr.id).map((row, i) => {

                    return (
                      <Item key={ObjPr.id[i]}>
                        <Itemimg source={IMGURL + '/content/0001/' + ObjPr.bag[i]} />
                        <section className='text'>
                          <h3>{ObjPr.post[i]}</h3>
                          <h6>{ObjPr.autor[i]}</h6>
                        </section>
                      </Item>
                    )
                    i += 1;
                  })
                  :
                  <Item>
                    <Itemimg source={Logo} />
                    <section className='text'>
                      <h3>Nombre</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </section>
                  </Item>

              }
            </section>
          </RowSection>

          {/* Estudios Biblicos */}
          <RowSection>
            <section className='textSection'><h1>Estudios Biblicos</h1></section>
            <section className='itemSection'>

              {
                Object.keys(ObjEst).length != 0 ?


                  Object.keys(ObjEst.id).map((row, i) => {

                    return (
                      <Item key={ObjEst.id[i]}>
                        <Itemimg source={IMGURL + '/content/0002/' + ObjEst.bag[i]} />
                        <section className='text'>
                          <h3>{ObjEst.post[i]}</h3>
                          <h6>{ObjEst.autor[i]}</h6>
                        </section>
                      </Item>
                    )
                    i += 1;
                  })
                  :
                  <Item>
                    <Itemimg source={Logo} />
                    <section className='text'>
                      <h3>Nombre</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </section>
                  </Item>

              }
            </section>
          </RowSection>

        </Contenedor>
      </Container>
    </>
  )
}

export const MainPage = ({ AxiosOb,AxiosOb2 }) => {

  AOS.init({ duration: 1000, delay: 5000 });
  return (
    <>
      <Container>
        <ContHeader>
          <h1> {AxiosOb.tipo} </h1>
        </ContHeader>
        <Contblock>
          <TopCont>
            {
              Object.keys(AxiosOb).length != 0 ?
                Object.keys(AxiosOb).map((row, i) => {

                  return (
                    <PrCard key={AxiosOb.id[i]} data-aos='fade-up'>
                      <PrImg source={IMGURL + '/content/0001/' + AxiosOb.bag[i]} />
                      <PrText>
                        <h3>{AxiosOb.post[i]}</h3>
                        <p>{AxiosOb.desc[i]}</p>
                        <h6>{AxiosOb.autor[i]}</h6>
                      </PrText>
                    </PrCard>)
                })
                : (
                  <PrCard>
                    <PrImg source={Content} />
                    <PrText>
                      <h3>Titulo</h3>
                      <p>Descripción</p>
                      <h6>Autor</h6>
                    </PrText>
                  </PrCard>
                )

            }
          </TopCont>
          <SideCont>
            <h4>Otros</h4>
            <section className='outer'>
              <h5>Estudios Biblicos</h5>
              <ul>
              {
              Object.keys(AxiosOb2).length != 0 ?
                Object.keys(AxiosOb2).map((row, i) => {

                  console.log(AxiosOb2);
                  return (
                     <Box key={AxiosOb2[i].id} data-aos='fade-up'>
                        <p>{AxiosOb2[i].post}</p>
                      </Box>
                    )
                })
                : (
                  <Box>
                    <p>No Data</p>
                  </Box>
                )              
            }
            </ul>
              
            </section>
          </SideCont>
        </Contblock>

      </Container>
    </>
  )
}
