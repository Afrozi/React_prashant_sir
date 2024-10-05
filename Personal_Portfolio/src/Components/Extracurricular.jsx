import React from 'react'
import { Award } from 'lucide-react';
import List from './List';
import Section from './Section';

const Extracurricular = () => {
  const items = ["Lorem ipsum dolor sit, amet consectetur"," adipisicing elit. Ratione quas quaerat blanditiis vitae"," dolores qui veritatis vero cupiditate obcaecati autem nobis sit quasi","cumque modi. Necessitatibus."];

  return <Section icon={<Award />} sectionTitle="Extracurricular Activities">
           <List items={items}/>
  </Section>
}

export default Extracurricular


