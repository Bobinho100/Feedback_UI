import { keyframes } from '@emotion/react'

import { useContext } from 'react'
/*import {motion, AnimatePresence } from 'framer-motion'*/
import React from 'react'
import FeedbackItem from './FeedbackItem'
import FeedbackContext from '../Context/FeedbackContext'

const FeedbackList = () => {

    const {feedback} = useContext(FeedbackContext)





    if (!feedback || feedback.length === 0){
        return <p>No feedback yet</p>
    }

    


            

    return (
        <div className='feedback-list'>

        {feedback.map((item) => (
            <FeedbackItem key = {item.id}
             item = {item}
             
             
             
             />

        ))}


            

    

        

        



    </div>
  )
}

export default FeedbackList