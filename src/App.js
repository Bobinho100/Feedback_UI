import Header from "./components/Header";

import {v4 as uuidv4} from 'uuid'


import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])

  }

  return(
    <div className="App">


      <Header />
      <div>
        <FeedbackForm handleAdd = {addFeedback}/>

      <FeedbackStats feedback = {feedback} />

      <FeedbackList 
       feedback={feedback}
       handleDelete = {handleDelete}
       
       />
    


      </div>

      
    
    </div>


  )
  
}

export default App;
