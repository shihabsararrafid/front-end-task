import React, { useEffect, useState } from 'react';
import LoadStory from '../CustomHooks/LoadStory';
import image from './../../Images/author.jpg'
import shape from './../../Images/trouble.svg'
import './LongStory.css'
const LongStory = () => {
    const [story]=LoadStory();
    // const [story,setStory]=useState([]);
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res=>res.json())
    //     .then(data=>setStory(data))
    // },[])
   const expectedStory=story?.filter(s=>s?.type==="long");
   let hashtag=expectedStory[0]?.hashtags.join(' '); 
   hashtag=hashtag?.slice(0,32)+'.....';
   console.log(hashtag);
   //const desiredStory=expectedStory[0];
    return (
        <div className='longStory'>
           <h2 className='title'>{expectedStory[0]?.title}</h2>
           <div className='mainSection'>
           <div>
         <img className='authorImg' src={image} alt="" />
          <p  id='authorName'>{expectedStory[0]?.author?.name}</p>
         </div>
         <div>
            <img className='shapeImg' src={shape} alt="" srcset="" />
            <p>{expectedStory[0]?.community?.name}</p>
         </div>
           </div>
           <hr />

           <div className='extraSec'>
<p id='created'>{expectedStory[0]?.created}</p>
<p className='readTime'>{expectedStory[0]?.readTime} read</p>
<p>{hashtag}</p>
           </div>
        
           {/* {
            expectedStory.map(s=><p>{s.title}</p>)
           } */}

        </div>
    );
};

export default LongStory;