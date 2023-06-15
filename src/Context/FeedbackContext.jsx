import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'This item is feedback context 1',
            rating: 10
        },
        {
            id:2,
            text: 'This item is feedback context 2',
            rating: 7
        },
        {
            id:3,
            text: 'This item is feedback context 3',
            rating: 8
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })


    // Context function to delete feedback
    const handleDeleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    // Add feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])

    }
    // Edit feedback
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    // Update feedback item

    const updateFeedback = (id, updateItem) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updateItem}: item)))

    }





    return <FeedbackContext.Provider value={{
        feedback,
        feedbackEdit,
        handleDeleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
       

    }}>{children}</FeedbackContext.Provider>



}

export default FeedbackContext