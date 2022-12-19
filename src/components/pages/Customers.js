import React from 'react'
import './CustomersStyle.css'
export const Customers = () => {
  return (
    <div>
        <div className='container intro'>
            <h1>Our Customers</h1>
            <p>
                Trusted by global companies for smart manufacturing.
            </p>
            <p>
                Franklin, KY
            </p>
            <p>
                (517)582-6615
            </p>
            <p>
                Support@PentaSolutionsLLC.com
            </p>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col-sm'>
                    <img src='..\assets\customerLogo1.png'></img>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default Customers