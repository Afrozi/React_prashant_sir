import React from 'react'
import { Award } from 'lucide-react';
import List from './List';
import Section from './Section';

const Extracurricular = () => {
  const items = ["Full Stack Web Development Course","Institution: Apna College"
                   ,"Duration: 4.5 months",<a href='https://drive.google.com/file/d/17dzj9sOXesb9jy2qBtf631wz6ZVIOB0X/view'>  Certificate:<b className='text-blue-600 font-italic'>FullStackCertification</b></a>];

  return <Section icon={<Award />} sectionTitle="Certifications">
           <List items={items}/>
  </Section>
}

export default Extracurricular


