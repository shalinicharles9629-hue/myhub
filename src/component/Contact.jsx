import React from 'react'
import { useState } from 'react';
function Contact() {
  const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setFormData({ name: "", email: "", message: "" });
  };
  function UsernameForm({onSubmitUsername}) {
    function handleSubmit(event){
      event.preventDefault()
      onSubmitUsername(event.currentTarget.elements.value)
    }
    
  }
}
  return (
    <>
    <div>
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
    </>
  )
}

export default Contact