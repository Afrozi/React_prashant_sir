import React from 'react'
import { Code } from 'lucide-react';
import Section from './Section';
import Pills from './Pills';

const Skills = () => {
  const skillTittle = ["Javascript","React","Node.JS","Python","SQL","Git","AWS","Docker"];
  return <Section icon={<Code />} sectionTitle="Skills">
    {skillTittle.map((title) => <Pills title={title}></Pills>)}
  </Section>
}

export default Skills

