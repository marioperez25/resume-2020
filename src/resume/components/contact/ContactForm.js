import React, { useState } from 'react';
import sendEmail from '../../effects/sendEmail'
import styled from 'styled-components'
import { COLORS } from '../../Colors'

const FormWrapper = styled.form`
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
      case 'message':
        setMessage(value)
        break;
      default:
        return;
    }

    const allFieldsHaveData = (
      username.length > 0
      && email.length > 0
      && message.length  > 0 )

    setReadyForSubmission(!allFieldsHaveData)
  }

  return (
    <FormWrapper className="contact-form" onSubmit={sendEmail}>

      <label 
        htmlFor="username">Name:</label>
      <input
        id="username"
        onChange={formInputHandler} 
        value={username}
        type="text"
        name="user_name" />

      <label 
        htmlFor="email">Email:</label>
      <input 
        id="email"
        onChange={formInputHandler} 
        value={email}
        type="email"
        name="user_email" />

      <label
        htmlFor="message">Comment:</label>
      <textarea
        id="message"
        onChange={formInputHandler} 
        value={message}
        name="message" />

      <input
        disabled={readyForSubmission}
        type="submit"
        value="Send" />

    </FormWrapper>
  );
}