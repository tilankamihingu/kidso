import React from 'react';
import Map from '../Map';
import './Footer.css';

const Footer = () => {
    return (
        <div className="foot">
            <footer>
                <div className="main-content">
                    <div className="left-box">
                        <h2>Abuot Us</h2>
                    
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga pariatur, ipsa, fugiat quod nobis quos a sapiente, est corrupti enim animi eius esse deserunt? Dolor quasi commodi quae eius delectus!</p>
                    </div>
                    <div className="center-box">
                        <h3>Quick Contacts</h3>
                       <ul>
                           <li>02568935</li>
                           <li>aqua@gmail.com</li>
                           <li>Aqua store</li>
                           <li>galle,sri lanka</li>
                       </ul>
                        <p>Copyright@tilankamihingu</p>
                    </div>
                    <div className="right-box">
                        <Map />
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer

