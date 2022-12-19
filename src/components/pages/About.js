import React from 'react'
import './AboutStyle.css'
const About = () => {
  return (
    <div>
        <div className='container intro'>
            <h1>About<span className='focus-text'>.</span></h1>
            <p>
            We treat our customers like family and do our part to help our local community. We believe that customer service is key to providing successful MES solutions. That is why we offer 24/7 support because we understand how important it is to keep your business processes running.
            </p>
        </div>
        <div className='container mission'>
          <div className='row'>
            <div className='col-md'>
              <h2>Established in <span className='focus-text'>2019</span></h2>
              <p>
                We are a small company that started off in 2019 restoring computers and providing managed IT Services for people and businesses in our neighborhood. We started up out of a home office in Perry, Michigan, and recently have moved to Franklin, Kentucky where our company has continued to evolve and grow. Today Penta Solutions exclusively provides MES, software development, and consulting services to businesses all around the Midwest. 
              </p>
            </div>
            <div className='col-md'>
              <h2>Our  <span className='focus-text'>Mission</span></h2>
              <p>
                Our mission is to provide exceptional MES and consulting services to companies within the Midwest. We believe that the future of manufacturing is Industry 4.0 and are passionate about delivering high-quality, sustainable, world-class solutions to our customers so that they can stay competitive within the global market.  
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About