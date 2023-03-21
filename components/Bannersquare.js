import React from 'react'
import Smallsquare from './Smallsquare'
const Bannersquare = () => {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
    <div className='col-md-6' style={{
          backgroundImage: `url("/images/twodoctor.jpg")`,
        }}>
    </div>
    <div className='col-md-6 text-background'>
        <div className='square-information' style={{padding:"0px 20px"}}>
    <h1>
              Our Talent
              <br />
              Solutions
            </h1>
            <h4 style={{marginBottom:"80px"}}>
            See how our focused industry expertise and decades of experience power higher quality hires and transformative workforce solutions.
            </h4>
            </div>
    </div>

    <Smallsquare color="#004582" href={"#"} title="Midas Technology"/>
    <Smallsquare color="#002454" href={"#"} title="Midas Healthcare"/>
    <Smallsquare color="#002454" href={"#"} title="Midas Life Science"/>
    <Smallsquare color="#004582" href={"#"} title="Midas Enginerring"/>
    </div>
    </div>
    </>
  )
}

export default Bannersquare