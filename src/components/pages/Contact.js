import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './ContactStyle.css'
const Contact = () => {
  return (
    <div>
      <div className='container intro'>
        <h1 className='page-title'>Contact Us<span className='focus-text'>.</span></h1>
      </div>
      <div className='container'>
        <form className='contact-form'>
          <div className='row'>
            <div className='col'>
              <div className="form-group">
                <label for="firstName">First Name:</label>
                <input type="text" className="form-control" id="firstName"  placeholder="First Name" required/>
              </div>
            </div>
            <div className='col'>
              <div className="form-group">
                <label for="lastName">Last Name:</label>
                <input type="text" className="form-control" id="lastName"  placeholder="Last Name" required/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" className="form-control" id="email" placeholder="Hello@example.com" required/>
              </div>
            </div>
            <div className='col'>
              <div className="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" className="form-control" id="phone" placeholder="1234567890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxLength={10} minLength={10} required/>
              </div>
            </div>
          </div>
        <div className="form-group">
          <label for="companyName">Company Name:</label>
          <input type="text" className="form-control" id="companyName"  placeholder="Your Company Name" required/>
        </div>
        <div className="form-group">
          <label for="message">Message</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact