import React from 'react';
import AuthorProfile from '../AuthorProfile/AuthorProfile';
import CommunityProfile from '../CommunityProfile/CommunityProfile';
import CoverPhoto from '../CoverPhoto/CoverPhoto';
import LongStory from '../LongStory/LongStory';
import ShortStory from '../ShortStory/ShortStory';
import './Body.css'

const Body = () => {
    return (
        <div className='body'>
            <div className='longStory_1'>             
            <LongStory withoutCover={false}></LongStory>
            <CoverPhoto></CoverPhoto>
            </div>
            <div className='shortStory_1'>
            <CoverPhoto></CoverPhoto>
            <ShortStory></ShortStory>
            </div>
            <div className="shortStory_withoutCover">
                <ShortStory></ShortStory>
            </div>
            <div className='authorsProfile'>
                <h2>Amazing Authors to Follow</h2>
                <AuthorProfile unfollow={false}></AuthorProfile>
                <AuthorProfile unfollow={true}></AuthorProfile>
                <AuthorProfile unfollow={false}></AuthorProfile>
            </div>
            <div className="longStory_2">
                <LongStory withoutCover={true}></LongStory>
            </div>
            <div className="shortStory_withoutCover_2">
                <ShortStory></ShortStory>
            </div>
            <div className='shortStory_1'>
            <CoverPhoto></CoverPhoto>
            <ShortStory></ShortStory>
            </div>
            <div className='communityProfile'>
                <h2>Amazing Communities to Follow</h2>
                <CommunityProfile></CommunityProfile>
                <CommunityProfile></CommunityProfile>
                <CommunityProfile></CommunityProfile>
            </div>
          
          
        </div>
    );
};

export default Body;