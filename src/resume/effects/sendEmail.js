import emailjs from 'emailjs-com';

export default function sendEmail(e){
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