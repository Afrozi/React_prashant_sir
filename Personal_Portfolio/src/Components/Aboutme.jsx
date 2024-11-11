import React from 'react'
import { User } from 'lucide-react';
import Section from './Section';

const Aboutme = () => {
  return <div className='mt-6'>
  <Section icon={<User />} sectionTitle="About Me">
     <p>
     Highly skilled and motivated Full Stack Developer with hands-on experience in front-end and back-end web development. Passionate about creating efficient, responsive applications with a strong emphasis on both UI/UX and backend functionality. Currently equipped with an Advanced Diploma in Computer Engineering (ADCE) and practical experience from internships at IBM and CodSoft.
    </p>
  </Section>
  </div>
}

export default Aboutme
