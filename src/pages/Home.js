import React from 'react'
import { GitHub, Email, LinkedIn } from '@mui/icons-material';
import "../styles/Home.css"

const Home = () => {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi, My name is Aditya</h2>
        <div className='prompt'>
          <h3>I am a software developer with passion for learning and creating</h3>
          <LinkedIn />
          <Email />
          <GitHub />
        </div> 
      </div>
      <div className='skills'>
        <ol className='list'>
          <li className='item'>
            <h2>Front End</h2>
            <span>
              HTML, CSS, JavaScript, React Js, React Native, Bootstrap
            </span>
          </li>
          <li className='item'>
            <h2>Back End</h2>
            <span>
              MySql, NodeJS, MongoDB
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              JavaScript, Java and C
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home;