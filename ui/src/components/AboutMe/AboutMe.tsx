import React from 'react';

import './AboutMe.scss';
export default function AboutMe() {

  return (
    <div className="about-me">
      <img className='about-me__thumbnail' src="https://media-exp1.licdn.com/dms/image/C4E03AQFjB5yByYjW0Q/profile-displayphoto-shrink_800_800/0/1638198711578?e=1666224000&v=beta&t=ZNZPX58tG_K1xxjgMu5-rxg5ovZmfPvRXxr4nlQ0BFo" alt="santiago saavedra profile" />
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
