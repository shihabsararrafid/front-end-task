import React from 'react';
import LoadStory from '../CustomHooks/LoadStory';
import './ShortStory.css'
const ShortStory = () => {
    const [story]=LoadStory();
    const shortstry= story?.find(s=>s.type==="short");
    return (
        <div className='shortStory'>
           <p>
            {
            
            shortstry?.content}</p> 
            <hr />
        </div>
    );
};

export default ShortStory;