
import './App.css';
import Avatar from './components/Avatar';
import Contact from './components/Contact';
import Expertise from './components/Expertise';
import Skill from './components/Skill';
import Position from './components/Position';
import {About}  from './components/About';
import { Education } from './components/Education';
import WorkExperience from './components/WorkExperience';
function App() {
  return (
    <>
      <div className='main md:container grid grid-cols-5  max-md:grid-cols-1 mx-auto  xl:px-40 pb-[60px]'>
        <div className='layout_left col-span-2 bg-[#3958a8] shadow-lg pb-20'>
            <Avatar></Avatar>
            <Contact></Contact>
            <Expertise></Expertise>
            <Skill></Skill>
  
        </div>
        <div className='layout_right col-span-3 bg-white shadow-lg'>
            <Position></Position>
            <About></About>
            <Education></Education>
            <WorkExperience></WorkExperience>
        </div>
      </div>
    </>
  )
}

export default App
