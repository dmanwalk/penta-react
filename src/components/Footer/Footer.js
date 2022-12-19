import React from 'react'
import './FooterStyle.css'
export const Footer = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>
                <hr></hr>
                <div className='col-sm'>
                    <h3>Our Customers Come <em class="focus-text">First</em></h3>
                </div>
                <div className='col-sm'>
                    <p className='footer-text'>	
                        At Penta Solutions we put our customers first. Our pricing and estimates are always upfront. No hidden costs. Email us or contact us directly for technical help and advice.
                    </p>
                </div>
            </div>
            <div className='row'>
                <hr></hr>
                <div className='col-sm'>
                    <h3>We Promise You the <em class="focus-text">Best</em></h3>
                </div>
                <div className='col-sm'>
                    <p className='footer-text'>	
                    At Penta Solutions we promise you our best service, because your time and resources matter. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer