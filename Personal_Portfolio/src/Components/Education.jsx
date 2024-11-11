import React from 'react'
import { BookOpen } from 'lucide-react';
import Section from './Section';
import Graduction from './Graduction';

const Education = () => {
  return <Section icon={<BookOpen />} sectionTitle="Education">
     <Graduction title="Advanced Diploma in Computer Engineering (ADCE)" school="Indian Institute of Computer Science (IICS), Delhi" year=" May 2022 – 2024 | CGPA: 8.1" ></Graduction>
  
     <Graduction title="High School (XII),Central Board of Secondary Education(CBSE)" school="Govt. Boys Sr. Sec. School, Sabhapur, North East Delhi Pin: 110092 " year="june 2020 – 2021 | CGPA: 75.8%"></Graduction>
  </Section>
}

export default Education


