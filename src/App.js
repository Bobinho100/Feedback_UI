import Header from "./components/Header";


import  {BrowserRouter  as Router, Route, Routes } from 'react-router-dom'


import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { useState } from "react";
import About from "./pages/About";
import AboutIconLink from "./components/AboutIconLink";

import { FeedbackProvider } from "./Context/FeedbackContext";

function App() {


  


  return(

    <FeedbackProvider>


      <Router>
        <Header />

          <div className="App">


          
            <div>
              <Routes>
                
                <Route path="/about" element = {<About />}></Route>
                  {/* <Route path="/bread"  element={<About />} />  */}
                          
                    <Route  path="/" element = {

                      <>

                        <FeedbackForm />
                        <FeedbackStats />
                        <FeedbackList />
                      
                      </>
                    } />         
                    
                
              
              </Routes>
            </div>
            <AboutIconLink/>
          </div>
        </Router>

      </FeedbackProvider>

    
    
  )
  
}

export default App;
