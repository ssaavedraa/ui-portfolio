import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import ContactForm from '../ContactForm/ContactForm';
import Projects from '../Projects/Projects';

export default function HomeContainer() {
  return (
    <div>
      <AboutMe/>
      <Projects/>
      <ContactForm/>
    </div>
  );
}
