import React from 'react'
import { User } from 'lucide-react';
import Section from './Section';

const Aboutme = () => {
  return <div className='mt-6'>
  <Section icon={<User />} sectionTitle="About Me">
     <p>
      I'am passionate full stack developer with 5 years of experience. 
      in building web applications.I love creating efficient, scalable 
      and user-friendly solution to complex problems.
    </p>
  </Section>
  </div>
}

export default Aboutme
