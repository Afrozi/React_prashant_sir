import React from 'react'
import afrozkhan from '../assets/afroz3-removebg-preview.png'

const Header = () => {
  return <header className="bg-blue-600 text-white p-5 rounded-xl 
   flex justify-between items-center">
    <div>
    <div className="font-bold text-3xl">Afrozkhan</div>
    <div className="text-xl">Educater</div>
    </div>
    <img className="rounded-full w-24" src={afrozkhan} alt="" />
   </header>
}

export default Header
