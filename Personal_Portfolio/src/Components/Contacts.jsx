import React from 'react'
import { Globe } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
import Section from './Section';
import SocialMedia from './SocialMedia';

const Contacts = () => {
  const Socialmedia = [
    {
    url:"www.linkedin.com/in/afrozkhan/",
    icon:<Linkedin />,
    title:"LinkedIn"},
    {
    url:"www.github.com",
    icon:<Github />,
    title:"Github"},
    {
    url:"www.twitter.com",
    icon:<Twitter />,
    title:"Twitter"}
  ]
  return <div className='pb-6'>
   <Section icon={<Globe />} sectionTitle="Contacts">
     <p className='text-gray-700 mb-4'>
       Email: afrozkhan@.com <br />
       Phone: +91 9876543210
      </p>
     {Socialmedia.map( social => <SocialMedia url={social.url} icon={social.icon} title={social.title}/>)}
  </Section>
  </div>
}

export default Contacts
