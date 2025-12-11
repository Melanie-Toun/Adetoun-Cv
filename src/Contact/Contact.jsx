import React, { useState, useEffect } from 'react';
import './Contact.css';
import cv from "../images/Toun_CV.pdf"

function Contact() {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Message: '',
    Date: '', 
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwKXSgez1Fi1521FEAXwe5GxexLAW5C-SEP2zykscCku8HhMGehmrGbCncMvwdrdRzF/exec';

  useEffect(() => {
    
    const today = new Date().toISOString().split('T')[0]; 
    setFormData((prevData) => ({
      ...prevData,
      Date: today,
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams(formData),
      });

      if (response.ok) {
        setMessage('Message sent successfully');
        setFormData({
          Name: '',
          Email: '',
          Message: '',
          Date: new Date().toISOString().split('T')[0], 
        });
        setTimeout(() => setMessage(''), 5000);
      } else {
        setMessage('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error!', error.message);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p><i className="fa-solid fa-paper-plane"></i>  goodluckmelanie@gmail.com</p>
            <p><i className="fa-solid fa-phone"></i> 07392274401</p>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/omotolani-adetoun-goodluck-b22a01287" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://wa.me/+447392274401" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
            <a href={cv} download className="btn btn2">Download Resume</a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="Email"
                value={formData.Email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                value={formData.Message}
                onChange={handleChange}
                placeholder="Your Message"
              ></textarea>
              <input
                type="date"
                name="Date"
                value={formData.Date}
                readOnly
              />
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            {message && <span id="msg">{message}</span>}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright <i className="fa-solid fa-copyright"></i> Ade G. Made with <i className="fa-solid fa-heart"></i></p>
      </div>
    </div>
  );
}

export default Contact;
