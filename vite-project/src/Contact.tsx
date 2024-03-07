import React, { useState } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Modal from './Modal';
import '@fortawesome/fontawesome-free/css/all.css'

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here

        // Display modal
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        // Reload the page
        window.location.reload();
    };

    return (
        <div>
            <NavBar />
            <h1 style={{ marginLeft: "2%", marginTop:"2%"}}>Give us your Feedback</h1>
            <details className="dropdown">
                <summary>
                    Contact Menu
                </summary>
                <ul dir="ltr">
                    <li><a href="https://www.outlook.com">Email - contact@Dise.ie</a></li>
                    <li><a href="https://www.tiktok.com/explore">TikTok - @DISE</a></li>
                    <li><a href="https://www.linkedin.com/">LinkedIn - @DISE</a></li>
                    <li><a href="https://www.google.com/maps">Address - V94 Y985</a></li>
                </ul>
            </details>
            <div style={{ display: 'flex', alignItems: 'center', padding: '5px', marginLeft: '5px' }}>
                <div> 
                <form onSubmit={handleSubmit} style={{ width: "300%", border: "5px solid #4D2585", borderRadius: "10px", padding: "15px", marginLeft: "20%", marginBottom: "10px" }}>
                    <div style={{ paddingBottom: '5px' }}>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            required
                            id="name"
                            style={{ backgroundColor: '#E8DFF2' }}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div style={{ paddingBottom: '5px', paddingTop: '5px' }}>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            autoComplete="email"
                            aria-label="Email"
                            required
                            aria-describedby="email-helper"
                            style={{ backgroundColor: '#E8DFF2' }}
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <small id="email-helper">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div style={{ paddingBottom: '5px', paddingTop: '5px' }}>
                        <label htmlFor="dropdown">Contact Reason: </label>
                        <select
                            id="dropdown"
                            style={{ backgroundColor: '#E8DFF2' }}
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="option1">Want to Order</option>
                            <option value="option2">Issue with Order</option>
                            <option value="option3">Question About Product</option>
                        </select>
                    </div>
                    <div style={{ paddingBottom: '5px', paddingTop: '5px' }}>
                        <label>How did you hear about us?</label>
                        <input type="radio" id="online_search" name="hear_about_us" value="Online Search" required />
                        <label htmlFor="online_search">Online Search</label><br/>
                        
                        <input type="radio" id="social_media" name="hear_about_us" value="Social Media" required />
                        <label htmlFor="social_media">Social Media</label><br/>

                        <input type="radio" id="word_of_mouth" name="hear_about_us" value="Word of Mouth" required />
                        <label htmlFor="word_of_mouth">Word of Mouth</label><br/>

                        <input type="radio" id="advertisement" name="hear_about_us" value="Advertisement" required />
                        <label htmlFor="advertisement">Advertisement</label><br/>
                    </div>
                    <div style={{ paddingBottom: '5px', paddingTop: '5px' }}>
                        <label htmlFor="dob">Date of Birth: </label>
                        <input
                            type="date"
                            name="dob"
                            placeholder="Date of Birth"
                            aria-label="Date of Birth"
                            required
                            style={{ backgroundColor: '#E8DFF2' }}
                            id="dob"
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message: </label>
                        <textarea
                            style={{ backgroundColor: '#E8DFF2' }}
                            id="message"
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                    </div>

                    <button type="submit" style={{ backgroundColor: '#4D2585', color: 'white' }}>Submit</button>
                </form>
                </div>
                
                
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
            <Footer />
        </div>
    );
};

export default Contact;
