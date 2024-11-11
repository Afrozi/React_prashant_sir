import React from 'react'
import { Heart } from 'lucide-react';
import List from './List';
import Section from './Section';

const Hobbies = () => {
  const hobbie = ["Genrative AI","Blockchain","Data Analytics","Data Science"];
  return <Section icon={<Heart />} sectionTitle="Hobbies & Interests">
  <List items={hobbie} />
  </Section>
}

export default Hobbies


