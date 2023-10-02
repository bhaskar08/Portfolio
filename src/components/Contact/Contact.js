import React from 'react';
import './contact.css';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_2a8tnyb', 'template_ktqcbkd', form.current, '8mlkun2rZ1CN0CLCf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    }

    return (
        <section id='contact'>
            <h2>Contact Me</h2>

            <div className='contact_container'>
                <div className='contact_options'>
                    <div className='contact_option'>
                        <AiOutlineMail className='contact_icon' />
                        <h4>Email</h4>
                        <h5>bhaskarbadgurjar@gmail.com</h5>
                        <a href='mailto:bhaskarbadgurjar@gmail.com'>Send Message</a>
                    </div>

                    <div className='contact_option'>
                        <AiOutlineLinkedin className='contact_icon' />
                        <h4>linkedIn</h4>
                        <h5>Bhaskar Badgurjar</h5>
                        <a href="https://www.linkedin.com/in/bhaskar-badgurjar/" target='_blank' rel="noopener noreferrer">Send Message</a>
                    </div>

                    <div className='contact_option'>
                        <AiOutlineWhatsApp className='contact_icon' />
                        <h4>Whatsapp</h4>
                        <h5>+91 9799659426</h5>
                        <a href='https://wa.me/9799659426' target='_blank' rel="noopener noreferrer">Send Message</a>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <h3>Send me a Mail</h3>
                    <input type="text" name='name' className='contact_textarea' placeholder='Enter Your Name' required></input>
                    <input type="email" name='email' className='contact_textarea' placeholder='Enter Your Email' required></input>
                    <textarea type="message" name='message' className='contact_textarea' rows={7} placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn_submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact