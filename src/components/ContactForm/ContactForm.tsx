import axios from 'axios';
import React, { SyntheticEvent, useContext, useState } from 'react';
import { SnackbarContext } from '../../contexts/SnackbarContext';
import { SnackbarStatus } from '../../types/Snackbar/snackbarEnum';

import './ContactForm.scss';

export default function ContactForm() {

  const snackbarContext = useContext(SnackbarContext);

  //TODO: Add static typing
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [areEmptyFields, setAreEmptyFields] = useState(true);
  const [isEmailCorrect, setisEmailCorrect] = useState(false);

  const handleChange = (event: SyntheticEvent): void => {
    checkInputValues(event);
  };

  const checkInputValues = (event: SyntheticEvent) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const target = event.target as HTMLInputElement;

    if(target.value.length > 0) {
      document.getElementById(target.id)?.classList.remove('error');
    }
    else {
      document.getElementById(target.id)?.classList.add('error');
    }

    if(target.id === 'phone'){
      if(target.value.slice(-1).match(/\d/) || target.value === ''){
        setFormData(formData => {
          return {
            ...formData,
            phone: target.value};
        });
      }
    }
    else{
      setFormData(formData => {
        return{
          ...formData,
          [target.id]: target.value
        };
      });
      if(formData.email.match(emailRegex)){
        setisEmailCorrect(true);
      }
      else{
        setisEmailCorrect(false);
      }
    }

    if(formData.name.length > 0 && formData.phone.length > 0 && formData.email.length > 0 && formData.message.length > 0){
      setAreEmptyFields(false);
    }
    else{
      setAreEmptyFields(true);
    }
  };

  const handleContactByEmail = async(event: SyntheticEvent) => {
    event.preventDefault();
    snackbarContext?.setSnackbarProps(
      {
        showSnackbar: true,
        status: SnackbarStatus.Loading,
        message: 'Sending email...'
      }
    );

    //TODO: Move this requests to a service
    await axios.post('https://api.santiagosaavedra.com.co/api/email/send-confirmation',{
      email: formData.email,
      name: formData.name,
      message: formData.message,
      phone: formData.phone
    });

    const response = await axios.post('https://api.santiagosaavedra.com.co/api/email/send-contact',{
      email: formData.email,
      name: formData.name,
      message: formData.message,
      phone: formData.phone
    });

    snackbarContext?.setSnackbarProps(
      {
        showSnackbar: true,
        message: response.data,
        status: SnackbarStatus.Success
      }
    );

    setTimeout(() => {
      snackbarContext?.setSnackbarProps(
        {
          message: response.data,
          status: SnackbarStatus.Success,
          showSnackbar: false
        }
      );
    }, 4000);

    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleContactByWhatsApp = (): void => {
    const messageHeader = `A message from: ${formData.name.replace(' ', '%20')} <${formData.email}> %0D%0A`;
    const whatsAppMessage = formData.message.replace('\n', '%0D%0A');
    window.open(`https://api.whatsapp.com/send?phone=573204798303&text=${messageHeader.replace(' ', '%20')}%20${whatsAppMessage.replace(' ', '%20')}`, '_blank');
  };
  return(
    <div className="contact-container">
      {/* {isAlertVisible && <Alert message={alertData.message} status={alertData.status}/>} */}
      <h1>{'Let\'s get in contact!'}</h1>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />
        <label htmlFor="phone">Phone number</label>
        <input type="text" name="phone" id="phone" onChange={handleChange} value={formData.phone} />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />
        {!isEmailCorrect && formData.email.length > 0 && <p className="error">Please enter a valid email address</p>}
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols={30} rows={10} onChange={handleChange} value={formData.message} ></textarea>
        {areEmptyFields && <p className='error'>Please fill all the blanks to continue</p>}
      </form>
      <button className='btn btn--primary' onClick={handleContactByEmail} disabled={areEmptyFields && !isEmailCorrect}>Contact by email</button>
      <button className='btn btn--primary' disabled={areEmptyFields && !isEmailCorrect} onClick={handleContactByWhatsApp} >Contact using WhatsApp</button>
    </div>
  );
}
