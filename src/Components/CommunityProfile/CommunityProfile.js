import React from 'react';
import Communityimg from './../../Images/community.jpg';
const CommunityProfile = () => {
    return (
        <div className='authorProfile'>
        <div className='authorProfile'>
        <div>
        <img className='authorImg' src={Communityimg} alt="" />
        </div>
       
       <div>
       <div className="div-1-parent">
       <div className='div-1'>
       <p >Travel For Explore </p>
        <p className='nm'>121 Stories    </p>
        <p className='nm'> 23 Authors</p>
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

export default CommunityProfile;