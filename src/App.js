import Header from "./components/Header";


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

  return(
    <div className="App">


      <Header />
      <div>
        <FeedbackForm />

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
