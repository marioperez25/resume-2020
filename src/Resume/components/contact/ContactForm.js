import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'
import { COLORS } from '../../Colors'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    input {
        border-radius: 5px;
    }
    input[type=submit] {
        margin-top: 20px;
        color: ${COLORS.lightBlue};
        font-weight: bold;
        background-color: ${COLORS.dark};
    }
    input[disabled] {
      margin-top: 20px;
      color: gray;
      font-weight: bold;
      background-color: lightgray;
  }
`;

export default function ContactForm() {
  
  const [ username , setUsername] = useState('')
  const [ email , setEmail] = useState('')
  const [ contactnumber , setContactnumber] = useState('')
  const [ message , setMessage] = useState('')
  const [ readyForSubmission , setReadyForSubmission] = useState(true)

  const formInputHandler = (event)=>{
    const id = event.target.id
    const value = event.target.value
    switch (id) {
      case 'username' :
        setUsername(value)
        break;
      case 'email':
        setEmail(value)
        break;
      case 'contactnumber':
        setContactnumber(value)
        break;
      case 'message':
        setMessage(value)
        break;
      default:
        return;
    }

    const allFieldsHaveData = (
      username.length > 0
      && email.length > 0
      && contactnumber.length > 0
      && message.length  > 0 )

    setReadyForSubmission(!allFieldsHaveData)
  }

  const sendEmail = (e)=> {
    const config = {
        user: 'user_uXU56LmOHaHkOLvHbqxMa',
        serviceId: 'mario-perez',
        templateId: 'template_0o9tj48'
    } 

    e.preventDefault();
    emailjs.sendForm(
        config.serviceId,
        config.templateId,
        e.target,
        config.user)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Form className="contact-form" onSubmit={sendEmail}>

      <label 
        for="username">Name:</label>
      <input
        id="username"
        onChange={formInputHandler} 
        value={username}
        type="text"
        name="user_name" />

      <label 
        for="email">Email:</label>
      <input 
        id="email"
        onChange={formInputHandler} 
        value={email}
        type="email"
        name="user_email" />
      
      <label 
        for="contactnumber">Contact Number:</label>
      <input
        id="contactnumber"
        onChange={formInputHandler} 
        value={contactnumber}
        type="text"
        name="contact_number" />

      <label
        for="message">Comment:</label>
      <textarea
        id="message"
        onChange={formInputHandler} 
        value={message}
        name="message" />

      <input
        disabled={readyForSubmission}
        type="submit"
        value="Send" />

    </Form>
  );
}