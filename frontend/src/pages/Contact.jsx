import React, { useState } from 'react';
import { FaDiscord, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setStatus('Message sent!');
      else setStatus('Error sending message.');
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <section id="contact" className="py-16 px-4 flex justify-center bg-[#0a174e]">
    <div className="rounded-2xl bg-white bg-opacity-10 backdrop-blur-md shadow-lg p-8 max-w-md w-full shadow-[0_0_32px_8px_rgba(0,123,255,0.5)]">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white" style={{ textShadow: '0 4px 16px rgba(0,0,0,0.7), 0 1px 0 #222' }}>Connect with me</h2>
        <div className="mt-8">
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://discord.com/users/458298840546672640" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="bg-white bg-opacity-10 text-white p-3 rounded border border-white hover:bg-opacity-20 transition duration-300">
              <FaDiscord size={24} />
            </a>
            <a href="https://x.com/snehil_behar" target="_blank" rel="noopener noreferrer" aria-label="X" className="bg-white bg-opacity-10 text-white p-3 rounded border border-white hover:bg-opacity-20 transition duration-300">
              <FaXTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/snehilbehar/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white bg-opacity-10 text-white p-3 rounded border border-white hover:bg-opacity-20 transition duration-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/in/snehilbehar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-white bg-opacity-10 text-white p-3 rounded border border-white hover:bg-opacity-20 transition duration-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
