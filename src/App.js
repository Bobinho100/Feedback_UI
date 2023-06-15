import Header from "./components/Header";

import {v4 as uuidv4} from 'uuid'
import  {BrowserRouter  as Router, Route, Routes } from 'react-router-dom'


import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./components/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

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


    <Router>
       <Header />

        <div className="App">


         
          <div>
            <Routes>
               
               <Route path="/about" element = {<About />}></Route>
                {/* <Route path="/bread"  element={<About />} />  */}
                        
                  <Route  path="/" element = {

                    <>

                      <FeedbackForm handleAdd = {addFeedback}/>
                      <FeedbackStats feedback = {feedback} />
                      <FeedbackList 
                      feedback={feedback}
                      handleDelete = {handleDelete}/>
                    
                    </>
                  } />         
                  
              
             
            </Routes>
          </div>
          <AboutIconLink/>
        </div>
      </Router>

    
    
  )
  
}

export default App;
