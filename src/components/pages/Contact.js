import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './ContactStyle.css'
const Contact = () => {
  return (
    <div>
      <h1 className='page-title'>Contact Us</h1>
      <div className='container'>
        <form>
              <div class="form-group">
          <label for="firstName">First Name</label>
          <input type="text" class="form-control" id="firstName"  placeholder="First Name" required/>
          </div>
          <div class="form-group">
          <label for="lastName">Last Name</label>
          <input type="text" class="form-control" id="lastName"  placeholder="Last Name" required/>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Hello@example.com" required/>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" class="form-control" id="phone" placeholder="1234567890" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" maxLength={10} minLength={10} required/>
        </div>
        <div class="form-group">
          <label for="companyName">Company Name</label>
          <input type="text" class="form-control" id="companyName"  placeholder="Your Company Name" required/>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea class="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact