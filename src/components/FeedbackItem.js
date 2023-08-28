
import '../styles/FeedbackItem.css'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'

import {FaTimes, FaEdit} from 'react-icons/fa'
import Card from '../shared/Card'

const FeedbackItem = ({item}) => {

    const {handleDeleteFeedback, editFeedback} = useContext(FeedbackContext)






  return (
    <>


        <Card reverse = {true}>
            <div className='num-display' >{item.rating}</div>

            <div className='button-section'>
                <button onClick = {() => handleDeleteFeedback(item.id)} className='close'>

                        <FaTimes color = 'purple' />


                        </button>
                        <button className='edit' onClick={() => editFeedback(item)}>
                        <FaEdit color='purple'></FaEdit>
                </button>

            </div>

            <div className='text-display'>{item.text}</div>








        </Card>



    </>


  )
}

export default FeedbackItem