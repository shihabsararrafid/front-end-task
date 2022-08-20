import React from 'react';
import CreationInfo from '../CreationInfo/CreationInfo';
import LoadStory from '../CustomHooks/LoadStory';
import './ShortStory.css'
const ShortStory = () => {
    const [story]=LoadStory();
    const shortstry= story?.find(s=>s.type==="short");
    const authorNm=shortstry?.author?.name;
    const time =shortstry?.created;
    const punchLine =shortstry?.community?.name;

    return (
        <div className='shortStory'>
           <p>
            {
            
            shortstry?.content}</p> 
            <hr />
           <CreationInfo time={time} punchLine={punchLine} authorName={authorNm}></CreationInfo>
        </div>
    );
};

export default ShortStory;