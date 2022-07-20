import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import "./Main.css"
import store from '../../data/store'
import bike1 from './bike1.png'
import bike2 from './bike2.png'
import bike3 from './bike3.png'
import bike4 from './bike4.png'
import message from './message.jpg'

export const Main = () => {
    const {login} = useContext(store)

   return(
       <>
        <Link to ="report"> <img src={message} className="report_img" alt='Report Message'/></Link>
        {login ? 
        <div className="main_routing">
            <Link className='main_link' to='officers'>Responsible officers</Link>
            <Link className='main_link' to='bikes'>Stolen bikes</Link>
        </div>
        : 
        null}
        <div className='company_title'>
            <span className="main_span">Bike Track Service</span>
        </div> 
        <div className="main_bike_imgs">
            <img src={bike1} alt="Bike 1" className="bike" />
            <img src={bike2} alt="Bike 2" className="bike" />
            <img src={bike3} alt="Bike 3" className="bike" />
            <img src={bike4} alt="Bike 4" className="bike" />
        </div>
       </>
   )
}