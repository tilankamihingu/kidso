import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import Child from '../../images/child.png';

const Profile = () => {
  return (
    <div className="profile-full">
        <div className="profile-container">
            <h1 className='prof-head'>My Profile</h1>
        <div className="profile-row">
            <div className="profile-card-right">
                <div className="profile-card-details">
                    <img src={Child} alt="" />
                    <div className="profile-person-details">
                        <h1>Eleena Smith</h1>
                        <h2>5 Games Played</h2>
                        <h3>10 Certificates</h3>
                        <Link to={`/wallet`}><button className="certificate-btn">View</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile