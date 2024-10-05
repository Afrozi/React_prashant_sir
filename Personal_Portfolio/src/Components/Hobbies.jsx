import React from 'react'
import { Heart } from 'lucide-react';
import List from './List';
import Section from './Section';

const Hobbies = () => {
  const hobbie = ["Photography","Hiking","Playing","guitar","Reading Sci-fi","Novals"];
  return <Section icon={<Heart />} sectionTitle="Hobbies & Interests">
  <List items={hobbie} />
  </Section>
}

export default Hobbies


