import React from 'react';
import CoverPhoto from '../CoverPhoto/CoverPhoto';
import LongStory from '../LongStory/LongStory';
import ShortStory from '../ShortStory/ShortStory';
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
            <div className='longStory_1'>             
            <LongStory></LongStory>
            <CoverPhoto></CoverPhoto>
            </div>
            <div className='shortStory_1'>
            <CoverPhoto></CoverPhoto>
            <ShortStory></ShortStory>
            </div>
          
          
        </div>
    );
};

export default Body;