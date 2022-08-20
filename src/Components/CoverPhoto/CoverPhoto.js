import React from 'react';
import './CoverPhoto.css';
import CoverPhotonew from './../../Images/cover.jpg';
const CoverPhoto = () => {
    return (
        <div className='cover'>
            
            <img className='coverImage' src={CoverPhotonew} alt="" />
        </div>
    );
};

export default CoverPhoto;