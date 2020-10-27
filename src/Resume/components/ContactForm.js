import React from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components'

const Form = styled.form`
    display: flex;
    flex-direction: column;
    input {
        border-radius: 5px;
    }
    input[type=submit] {
        margin-top: 20px
    }
`;

export default function ContactForm() {
    
  function sendEmail(e) {
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
      <input type="hidden" name="contact_number" />
      <label>Nombre:</label>
      <input type="text" name="user_name" />
      <label>Correo Electronico:</label>
      <input type="email" name="user_email" />
      <label>Su consulta:</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </Form>
  );
}