import React from 'react'
import { Briefcase } from 'lucide-react';
import Section from './Section';
import Projects_List from './Projects_List';
const Project = () => {
  const projectList = [
    {title:"Glimmer - ( get your staying home )",desc:"A platform similar to Airbnb, designed for booking stays with open-source code, allowing users to create listings and manage CRUD operations with a secure review system." ,TechUsed:["HTML","Javascript","CSS","Tailwind-CSS","React","Node.JS","Express","Mongoose","MongoDB"], msgl1:"Features user authentication (signup, login, logout) and authorization, ensuring secure user interactions on listings and reviews." , msgl2: "Developed with Node.js, Express, MongoDB, and EJS; deployed on Render for scalable and reliable hosting." , Note:"Note: ( my be delay because of free online hosting. )  ", projectUrl:"https://glimmer-unxo.onrender.com/listings", },

    {title:"Code Help - ( buy online courses at the best price )",desc:"An affordable course platform for students to access a wide range of resources, built for enhanced browsing and purchasing experience.",TechUsed:["HTML","CSS","Javascript","Tailwind-CSS","PHP"],msgl1:"Created using HTML, CSS, JavaScript, and Tailwind CSS to deliver a visually appealing, responsive interface.",msgl2:"	Collaborated with a team on project features, participating in stand-ups, code reviews, and sprint planning.",Note:"Recognized as a top 9 team out of 8000 interns for exceptional work; live project Code Help includes signup and login functionalities.",projectUrl:"https://shehbaz456.github.io/Code-Help/"},
  ]
  return <Section icon={<Briefcase />} sectionTitle="Projects">
  {projectList.map( project => < Projects_List title={project.title} desc={project.desc} msgl1={project.msgl1} msgl2={project.msgl2} projectUrl={project.projectUrl} Note={project.Note} TechUsed={project.TechUsed}/>)}
  </Section>
}

export default Project

