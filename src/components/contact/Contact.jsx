import React, { useRef, useState } from 'react';
import Title from '../wow/Title';
import ContactLeft from './ContactLeft';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();

  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const emailValidation = () => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = (e) => {
    e.preventDefault();

    if (!username.trim()) { setErrMsg('Username is required!'); setSuccessMsg(''); return; }
    if (!phoneNumber.trim()) { setErrMsg('Phone number is required!'); setSuccessMsg(''); return; }
    if (!email.trim()) { setErrMsg('Please give your Email!'); setSuccessMsg(''); return; }
    if (!emailValidation()) { setErrMsg('Give a valid Email!'); setSuccessMsg(''); return; }
    if (!subject.trim()) { setErrMsg('Please give your Subject!'); setSuccessMsg(''); return; }
    if (!message.trim()) { setErrMsg('Message is required!'); setSuccessMsg(''); return; }

    setErrMsg('');
    setLoading(true);

    emailjs.sendForm(
      'service_kr28r4k', // Service ID
      'template_1k6hhrd', // Template ID
      formRef.current,
      'KGohqSZ4y584vRopy' // Public Key
    )
    .then(() => {
      setLoading(false);
      setSuccessMsg(`Thank you dear ${username}, Your message has been sent successfully!`);
      setUsername(''); setPhoneNumber(''); setEmail(''); setSubject(''); setMessage('');
    }, (error) => {
      setLoading(false);
      setErrMsg('Something went wrong! Try again.');
      console.log(error.text);
    });
  };

  return (
    <section id="contact" className="w-full py-20 border-b border-black">
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>

      <div className="w-full flex flex-col lg:flex-row gap-10 mt-10">
        {/* Left Contact Info */}
        <ContactLeft />

        {/* Right Form */}
        <div className="w-full lg:w-2/3 bg-linear-to-r from-[#1e2024] to-[#23272b]
          p-6 md:p-8 rounded-lg shadow-2xl">
          {errMsg && <p className="py-3 text-center text-orange-500 animate-bounce">{errMsg}</p>}
          {successMsg && <p className="py-3 text-center text-green-500 animate-bounce">{successMsg}</p>}

          <form ref={formRef} onSubmit={handleSend} className="flex flex-col gap-6 mt-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="flex-1 p-3 bg-[#141518] text-gray-300 rounded border border-red-800"
              />
              <input
                type="text"
                name="user_phone"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="flex-1 p-3 bg-[#141518] text-gray-300 rounded border border-red-700"
              />
            </div>

            <input
              type="email"
              name="user_email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-3 bg-[#141518] text-gray-300 rounded border border-red-700"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="p-3 bg-[#141518] text-gray-300 rounded border border-red-700"
            />

            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              className="p-3 bg-[#141518] text-gray-300 rounded border border-red-700"
            />

            <button
              type="submit"
              className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-500 uppercase
              hover:text-white hover:border hover:border-red-700 duration-300">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
