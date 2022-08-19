import React, { useEffect, useState } from 'react';
import LoadStory from '../CustomHooks/LoadStory';

const LongStory = () => {
    const [story]=LoadStory();
    // const [story,setStory]=useState([]);
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res=>res.json())
    //     .then(data=>setStory(data))
    // },[])
   const expectedStory=story?.filter(s=>s?.type==="long");
   //const desiredStory=expectedStory[0];
    return (
        <div>
           <h2>{expectedStory[0]?.title}</h2>
          
           {/* {
            expectedStory.map(s=><p>{s.title}</p>)
           } */}
<p>Story:{story?.length}</p>
        </div>
    );
};

export default LongStory;