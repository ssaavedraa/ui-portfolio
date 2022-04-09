import React, { useState } from 'react'
import axios from 'axios'

import './ContactForm.scss'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData(email => {
            return {...email, [e.target.id]: e.target.value}
        })
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        console.log(formData)
        e.preventDefault()
        const response = await axios.post('https://ssaavedraa.herokuapp.com/email/send',{
            sender: formData.email,
            fullName: formData.name,
            message: formData.message
        })
        console.log(response)
    }

    return(
        <div className="contact-container">
            <h1>Let's get in contact!</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={handleChange} />
                <label htmlFor="phone">Phone number</label>
                <input type="text" name="phone" id="phone" onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} />
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange}></textarea>
            </form>
            <button className='btn' onClick={handleSubmit}>Contact by mail</button>
            <button className='btn' disabled={true}>Contact using WhatsApp</button>
        </div>
    )
}
