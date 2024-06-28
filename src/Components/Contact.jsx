import { useState } from 'react';
import { toast } from 'react-toastify';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple form validation
        if (formData.name.trim() === '' || formData.email.trim() === '' || formData.message.trim() === '') {
            toast.error("Please fill in all fields");
        } else {
            setFormSubmitted(true);
            toast.success("Successfully submitted");
        }
    };

    return (
        <div className="contact-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
