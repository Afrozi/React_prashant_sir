import React from 'react'
import { BookOpen } from 'lucide-react';
import Section from './Section';
import Graduction from './Graduction';

const Education = () => {
  return <Section icon={<BookOpen />} sectionTitle="Education">
     <Graduction title="Bachelor of Computer Science" school="University of Dhaka" year="2016-2020"></Graduction>
     <Graduction title="FullStack Web Development" school="Bootcamp code Academy" year="2020"></Graduction>
  </Section>
}

export default Education


