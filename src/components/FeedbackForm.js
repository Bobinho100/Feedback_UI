import Card from '../shared/Card'

import React, { useState } from 'react'
import Button from '../shared/Button'
import '../styles/FeedbackForm.css'
import RatingSelect from './RatingSelect'







const FeedbackForm = ({handleAdd}) => {

    const [text, settext] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)

    const handleTextChange = (event) => {
        if(text === ''){
            setBtnDisabled(true)
            setMessage(null)
        }else if (text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        }else{
            setMessage(null)
            setBtnDisabled(false)
        }


        settext(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10 ) {
            const newFeedback = {
                text,
                rating
            }
            handleAdd(newFeedback)

            settext('')
        }
    }
  return (
    <>

        <Card>
            <form  onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>

                <RatingSelect  select = {(rating) => setRating(rating)}/>
                <div className='input-group'>
                    <input
                     value={text}
                      type='text' 
                      placeholder='Write a review'  
                      onChange={handleTextChange}
                      
                      />
                    <Button 
                     type='submit'
                     isDisabled={btnDisabled}
                     
                     
                     >{`send`}</Button>
    

                </div>
                {message && <div className='message'>{message}</div>}
            </form>

        </Card>
    
    
    </>
    
  )
}

export default FeedbackForm