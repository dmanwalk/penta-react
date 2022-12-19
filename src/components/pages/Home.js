import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './HomeStyle.css';

export const Home = () => {
  const [message, setMessage] = useState("");

useEffect(() => {
  fetch("http://localhost:8000/message")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
}, []);
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md'>
          <h1 class="page-title">Your MES integration Experts</h1>
          <div class="center-column">
              Penta Solutions is an I.T.  consulting company that specializes in integrating manufacturing execution systems (MES). Our corporate office is located in Southern Kentucky. We started our business in 2019 to provide businesses exceptional I.T. consulting and MES integration services to those in the Midwest. For our list of services, visit our Services tab. Reach out via phone, email, or Facebook, and let us know how we can help!
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <img className='asset-badge' src='..\assets\Certified-Full-175x175.png'></img>
        </div>
        <div className='col-sm'>
          <img className='asset-badge' src='..\assets\registered-integrator.png'></img>
        </div>
      </div>   
    </div>
    
    <div className='container'>
      <div className='row'>
        <div className='col-md'>
          <h2 className='subtitle'>Some of our Services Include:</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Mach2 Integration and Management Services</h5>
              <p class="card-text">We have successfully launched Mach2 within a variety of different manufacturing environments. As certified Mach2 developers, we are capable of project planning, launching, integrating, and customizing your Mach2 experience to fit your unique manufacturing needs. Contact us today to get started on your shop floor automation journey. </p>
              <a href="#" class="btn btn-primary">Learn More...</a>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Mach2 Developer Training</h5>
              <p class="card-text">We have over 3 years of experience developing within the Tridium Niagara/ Mach2 product writing some of the most cutting-edge dashboards and automation. Contact us if you are looking to have hands-on in-depth training for your next up-and-coming Mach2 Developers.</p>
              <a href="#" class="btn btn-primary">Learn More...</a>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Ignition Integration and Management Services</h5>
              <p class="card-text">As a Core certified Inductive Automation Integrator we can serve as a one-stop shop for all your Ignition needs for software, module add-ons, integration, and customization. Contact us today to get started.</p>
              <a href="#" class="btn btn-primary">Learn More...</a>
            </div>
          </div>
        </div>
        <div className='col-sm'>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Custom Kepware Solutions</h5>
              <p class="card-text">As a registered Kepware partner, we have created numerous customized Kepware solutions that integrate with either third party, or custom-made software to meet customer requirements. Contact us today for more information. </p>
              <a href="#" class="btn btn-primary">Learn More...</a>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm'>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Software and Web Development</h5>
              <p class="card-text">Looking to automate some of your business processes? Looking to increase your business's web presence online? Contact us today to see how we can help your business become more efficient and help you acquire more customers.</p>
              <a href="#" class="btn btn-primary">Learn More...</a>
            </div>
          </div>
        </div>
      </div>
        <h1>{message}</h1>
    </div>
    </>
  )
}

export default Home