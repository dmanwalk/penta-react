import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './ContactStyle.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
export const Contact = () => {

    const [email,setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');
    const[loading, setLoading] = useState(false);
    const[success,setSuccess] = useState(false)

    const submitHandler = async (e) =>{
      e.preventDefault(); //prevent page from refreshing
      if(!email || !firstName || !lastName || !phoneNumber || !company || !message){
        return toast.error('Please fill in the entire form.')
      }
      try{
        setLoading(true);
        const {data} = await axios.post('http://localhost:8000/api/email',{
          firstName,
          lastName,
          phoneNumber,
          email,
          company,
          message,
        });
        setLoading(false);
        toast.success(data.message);
      }
      catch(err){
          setLoading(false)
          toast.error(
            err.response && err.response.data.message 
            ? err.response.data.message
            : err.message
          )
      }
    }
  return (
    <div>
      <ToastContainer position='bottom-center' limit={1}/>
      <div className='container intro'>
        <h1 className='contact-page-title'>Contact Us<span className='focus-text'>.</span></h1>
      </div>
      
      <div className='container'>
        <form className='contact-form' onSubmit={submitHandler}>
          <div className='row'>
            <div className='col'>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id="firstName"  placeholder="First Name" />
              </div>
            </div>
            <div className='col'>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id="lastName"  placeholder="Last Name" />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input onChange={(e) =>setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Hello@example.com" />
              </div>
            </div>
            <div className='col'>
              <div className="form-group">
                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" onChange={(e) =>setPhoneNumber(e.target.value)} className="form-control" id="phone" placeholder="1234567890"  maxLength={10} minLength={10} />
              </div>
            </div>
          </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name:</label>
          <input type="text" onChange={(e) =>setCompany(e.target.value)} className="form-control" id="companyName"  placeholder="Your Company Name" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea onChange={(e) =>setMessage(e.target.value)} className="form-control" id="message" rows="3"></textarea>
        </div>
        <br></br>
        <button disabled={loading||success} type="submit" className="btn btn-primary">{loading ? 'Submitting...' : 'Submit'}</button>
        </form>
      </div>
    </div>
  )
}

export default Contact