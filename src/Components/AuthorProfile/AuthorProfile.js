import React from 'react';
import authotImage from './../../Images/author.jpg';
import './AuhtorProfile.css'
const AuthorProfile = () => {
    return (
        <div className='authorProfile'>
            <div className='authorProfile'>
            <div>
            <img className='authorImg' src={authotImage} alt="" />
            </div>
           
           <div>
           <div className="div-1-parent">
           <div className='div-1'>
           <p id='nm'>Michael Scott </p>
            <p>121 Stories    </p>
            </div>
            <p>Don't Ever,for any reason , do anything to anyone.....</p>
           </div>
        
          
           </div>
            </div>
            <div className='div-3'>
            <p>1021 Followers</p>
            <button className='btn'>Follow</button>
        </div>
            </div>
           
    );
};

export default AuthorProfile;