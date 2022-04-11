import React, { useState } from 'react'
import axios from 'axios'

import './ContactForm.scss'
import Alert from '../Alert/Alert.component'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const [isAlertVisible, setIsAlertVisible] = useState(false)
    const [alertData, setAlertData] = useState({
        status: '',
        message: ''
    })
    const [areEmptyFields, setAreEmptyFields] = useState(true)
    const [isEmailCorrect, setisEmailCorrect] = useState(false)

    const handleChange = (e) => {
        // setFormData(formData => {
        //     return {...formData, [e.target.id]: e.target.value}
        // })
        checkInputValues(e)
    }

    const checkInputValues = (e) => {
        var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

        if(!e.target.value.length > 0) {
            document.getElementById(e.target.id).classList.add('error')
        }
        else {
            document.getElementById(e.target.id).classList.remove('error')
        }

        if(e.target.id === 'phone'){
            if(e.target.value.slice(-1).match(/\d/) || e.target.value === ''){
                setFormData(formData => {
                    return {
                    ...formData,
                    phone: e.target.value}
                })
            }
        }
        else{
            setFormData(formData => {
                return{
                    ...formData,
                    [e.target.id]: e.target.value
                }
            })
            if(formData.email.match(emailRegex)){
                setisEmailCorrect(true)
            }
            else{
                setisEmailCorrect(false)
            }
        }

        if(formData.name.length > 0 && formData.phone.length > 0 && formData.email.length > 0 && formData.message.length > 0){
            setAreEmptyFields(false)
        }
        else{
            setAreEmptyFields(true)
        }
    }

    const handleContactByEmail = async (e) => {
        e.preventDefault()
        setIsAlertVisible(true)
        setAlertData({
            status: 'pending',
            message: 'Sending email...'
        })
        const response = await axios.post('https://ssaavedraa.herokuapp.com/email/send',{
        sender: formData.email,
        fullName: formData.name,
        message: formData.message,
        phone: formData.phone
        })
        setAlertData(response.data)
        setTimeout(() => {
            setIsAlertVisible(false)
        }, 3000);

        setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    }

    const handleContactByWhatsApp = (e) => {
        const messageHeader = `A message from: ${formData.name.replace(' ', '%20')} <${formData.email}> %0D%0A`
        const whatsAppMessage = formData.message.replace('\n', '%0D%0A')
        window.open(`https://api.whatsapp.com/send?phone=573204798303&text=${messageHeader.replace(' ', '%20')}%20${whatsAppMessage.replace(' ', '%20')}`, '_blank')
    }

    return(
        <div className="contact-container">
           {isAlertVisible && <Alert message={alertData.message} status={alertData.status}/>}
            <h1>Let's get in contact!</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />
                <label htmlFor="phone">Phone number</label>
                <input type="text" name="phone" id="phone" onChange={handleChange} value={formData.phone} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />
                {!isEmailCorrect && formData.email.length > 0 && <p className="error">Please enter a valid email address</p>}
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} value={formData.message} ></textarea>
                {areEmptyFields && <p className='error'>Please fill all the blanks to continue</p>}
            </form>
            <button className='btn' onClick={handleContactByEmail} disabled={areEmptyFields && !isEmailCorrect}>Contact by email</button>
            <button className='btn' disabled={areEmptyFields && !isEmailCorrect} onClick={handleContactByWhatsApp} >Contact using WhatsApp</button>
        </div>
    )
}
