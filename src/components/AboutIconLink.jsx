import React from 'react'
import {FaQuestion} from 'react-icons/fa'
import '../styles/AboutIconLink.css'
import {Link} from 'react-router-dom'

const AboutIconLink = () => {
  return (
    <div className='aboutIcon'>

        <Link to = {{
            pathname: '/about'
        }}>
         <FaQuestion  size={30}/>


        </Link>

        


    </div>
  )
}

export default AboutIconLink