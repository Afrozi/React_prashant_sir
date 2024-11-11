import React from 'react'
import { Globe } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { AtSign  } from 'lucide-react';
import Section from './Section';
import SocialMedia from './SocialMedia';

const Contacts = () => {
  const Socialmedia = [
    {
    url:"https://www.linkedin.com/in/afroz-khan-191763289/",
    icon:<Linkedin />,
    title:"LinkedIn"},
    {
    url:"https://github.com/Afrozi?tab=repositories",
    icon:<Github />,
    title:"Github"},
    {
    url:"",
    icon:<AtSign />,
    title:"Email"}
  ]
  return <div className='pb-6'>
   <Section icon={<Globe />} sectionTitle="Contacts">
     <p className='text-gray-700 mb-4'>
       Email: afrozpp22005@gmail.com <br />
       Phone: +91 7827110882
      </p>
     {Socialmedia.map( social => <SocialMedia url={social.url} icon={social.icon} title={social.title}/>)}
  </Section>
  </div>
}

export default Contacts
