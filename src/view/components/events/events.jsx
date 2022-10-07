import React,{useState,useEffect} from "react";
import { EventsBox, EventsContainer, EvGrid, Item,Date,Info,Icon } from "./styled";
import Logoicon from "../../assets/images/Logo.png"
import {getEvents} from '../../../Services/services'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Events = ({haveError}) => {

    
    const [events,setEvents]= useState([]);



    useEffect(()=>{

        getEvents(haveError).then(data=>{
            if(data.status===200){
                setEvents(data.data)
            }else{
                console.log('Ans Status: ',data.status)                
            }
        });
        
    },[])


    AOS.init({ duration: 1000, delay: 200 });
    return (
        <>
            {/* Container */}
            <EventsContainer>
                {/* BOX */}
                <EventsBox data-aos="fade-up">
                    {/* Scroll Here! - Display Grid  - Items Here!*/}
                    <EvGrid>
                        {/* Item 1 */}
                        { Object.keys(events).length != 0 ? (                           



                            events.body.map((ev) => {
                               return (<Item key={ev.evid}>
                                    <Date>
                                        <section>{ev.evdate}</section>
                                        <section>{ev.evtime}</section>
                                    </Date>
                                   <Info>
                                       <h3>{ev.evtitle}</h3>
                                       <p>{ev.evdesc}</p>
                                   </Info>
                                   <div>
                                       <Icon src={Logoicon} alt="..." />
                                   </div>
                                </Item>)
                            })
                        ): (
                            <Item>
                                    <Date>
                                        <section>00</section>
                                        <section>00</section>
                                    </Date>
                                   <Info>
                                       <h3>Empty</h3>
                                       <p>The lorem text the section that contains header.</p>
                                   </Info>
                                   <div>
                                       <Icon src={Logoicon} alt="..." />
                                   </div>
                                </Item>)
                        }
                        
                    </EvGrid>
                </EventsBox>
            </EventsContainer>
        </>
    );
};

export default Events;
