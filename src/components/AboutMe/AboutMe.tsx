import React from 'react';

import './AboutMe.scss';
import profilePicture from '../../assets/img/profile.jpg';

export default function AboutMe() {

  return (
    <div className="about-me">
      <img className='about-me__thumbnail' src={profilePicture} alt="santiago saavedra profile" />
      <div className="about-me__header">
        <h1 className='about-me__header--title'>
          Fullstack Web Developer
        </h1>
        <div className='about-me__button-container'>
          <button className='btn btn--primary'>Contact me</button>
          <button className='btn btn--primary'>Download CV</button>
        </div>
      </div>
    </div>
  );
}
