import React, { useState } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const [sent, setSent] = useState('');

  const sendEmail = async (e) => {
    try {
      e.preventDefault();

      emailjs.sendForm(
        'service_rtugql8',
        'template_5jw9u4k',
        form.current,
        'NiaXoFFBYSoYQ4e4z'
      );

      e.target.reset();

      setSent('Message Sent');
    } catch (err) {
      setSent(err);
    }
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Reso0208@gmail.com</h5>
            <a href="mailto:reso0208@gmail.com" rel="noreferrer" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          <div>{sent}</div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
