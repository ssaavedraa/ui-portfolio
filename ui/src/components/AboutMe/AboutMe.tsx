import React from 'react';

import './AboutMe.scss';
import profilePicture from '../../assets/img/profile.jpg';

export default function AboutMe() {

  return (
    <div className="about-me">
      <img className='about-me__thumbnail' src={profilePicture} alt="santiago saavedra profile" />
      <div className='test'>
        <code className='about-me__profile'>{
          `const profile = {\n
          name: Santiago,\n
          lastNames: Saavedra Arevalo,\n
          occupation: Fullstack Developer,\n
          skills: {\n
            frontend: [\n
              react: {\n
                ssr: false,\n
                javascript: true,\n
                typescript: false\n
                relatedJobs: undefined\n
              },\n
              vue: {\n
                ssr: true,\n
                javascript: true,\n
                typescript: false\n
                realtedJobs: [\n
                  softwareDeveloper: 'Torre Labs'\n
                ]\n
              }\n
            ]\n
            backend: [\n
              playFramework: {\n
                language: 'Scala',\n
                relatedJobs: [\n
                  softwareDeveloper: 'Torre Labs'\n
                ]\n
              },\n
              springboot: {\n
                language: 'Java',\n
                relatedJobs: undefined\n
              },\n
              express: {\n
                janguage:'JavaScript',\n
                relatedJobs: undefined\n
              }\n
            ]\n
          }\n
        }`
        }
        </code>
      </div>
    </div>
  );
}
