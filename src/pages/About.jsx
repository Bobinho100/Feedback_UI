
import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../shared/Card'

const About = () => {
  return (
   <Card>
    <div>
        <h1>This is a React app to leave feedback</h1>
        <p>This is a react app to leave feedback for a product or services</p>
        <p>version: 1.0.0</p>

        <p>
            <Link to='/'>Back to Home</Link>
        </p>
     </div>
   </Card>
  )
}

export default About