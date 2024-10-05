import React from 'react'
import { Briefcase } from 'lucide-react';
import Section from './Section';
import Projects_List from './Projects_List';
const Project = () => {
  const projectList = [
    {title:"E-Commerce Platform",desc:"Developed an e-commerce platform",TechUsed:["React","Node.JS","MongoDB","Stripe"]},
    {title:"Social Media Dashboard",desc:"Created a social media dashboard",TechUsed:["Express","MongoDB","Javascript"]},
  ]
  return <Section icon={<Briefcase />} sectionTitle="Projects">
     {projectList.map( project => < Projects_List title={project.title} desc={project.desc} TechUsed={project.TechUsed}/>)}
  </Section>
}

export default Project

