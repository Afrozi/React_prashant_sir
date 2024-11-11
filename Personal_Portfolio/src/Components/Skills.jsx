import React from 'react'
import { Code } from 'lucide-react';
import Section from './Section';
import Pills from './Pills';

const Skills = () => {
  const skillTittle = ["HTML","CSS","Javascript","React","Node.JS","Express","PHP","CakePHP","MongoDB","SQL","Git"];
  return <Section  icon={<Code />} sectionTitle="Skills">
    <div className='flex flex-wrap w-3/5 gap-2' >
    {skillTittle.map((title) => <Pills title={title}></Pills>)}
    </div>
  </Section>
}

export default Skills

