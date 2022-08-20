import React from 'react';
import authorimg from './../../Images/author.jpg';
import shape from './../../Images/trouble.svg'
const CreationInfo = ({authorName,time,punchLine}) => {
    return (
        <div className='mainSection'>
            <div>
            <img className='authorImg' src={authorimg} alt="" />
            <p>{authorName}</p>
            </div>
           
            <p>{time}</p>
            <div>
            <img className='shapeImg' src={shape} alt="" srcset="" />
            <p>{punchLine}</p>
            </div>
           
        </div>
    );
};

export default CreationInfo;