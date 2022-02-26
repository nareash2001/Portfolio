import React from 'react'
import {Element} from 'react-scroll';
import skillimg from '../../code.jpg';
import { LinearProgress } from '@material-ui/core';
import './Skillcontainer.css';
const Skillcontainer = () => {
  return (
    <Element id='skills' className='skillcontainer'>
    <div className='skillcontainer-image'>
        <img src={skillimg} alt="" />
    </div>
    <div className='skillcontainer-text'>
      <h2>SKILLSET</h2>
      <div className='skillcontainer-skillname'>
        <h5>C</h5>
        <div className='skillcontainer-slider skillcontainer-slider1'>
          <LinearProgress variant="determinate" value={80} />
      </div>
      </div>
      <div className='skillcontainer-skillname'>
        <h5>C++</h5>
        <div className='skillcontainer-slider skillcontainer-slider2'>
          <LinearProgress variant="determinate" value={70} />
      </div>
      </div>
      <div className='skillcontainer-skillname'>
        <h5>JAVA</h5>
        <div className='skillcontainer-slider skillcontainer-slider3'>
          <LinearProgress variant="determinate" value={90} />
      </div>
      </div>
      <div className='skillcontainer-skillname'>
        <h5>React</h5>
        <div className='skillcontainer-slider skillcontainer-slider4'>
          <LinearProgress variant="determinate" value={90} />
      </div>
      </div>
    </div>
    </Element>
  )
}

export default Skillcontainer
