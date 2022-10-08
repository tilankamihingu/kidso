import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-content">
            <div className="contact">
                <div className="left-side">
                    <h1 className="title-register">Contact Us</h1>
                </div>
                <div className="right-side">
                    <form>
                        <h1>email</h1>
                        <input type="text" required placeholder="first name" />
                        <h1>message</h1>
                        <input type="text" required placeholder="first name" />
                        <h1>comment</h1>
                        <input type="text" required placeholder="first name" />
                        <button type="submit" class="send">Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
