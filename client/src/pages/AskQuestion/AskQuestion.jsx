import React, {useState} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import './AskQuestion.css'
import askQuestion from '../../actions/question'

const AskQuestion = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const User = useSelector((state) => (state.currentUserReducer))
  //console.log(User.result._id);

  const [Title , setTitle ] =  useState('')
  const [Body , setBody ] =  useState('')
  const [Tags , setTags ] =  useState('')

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(askQuestion({Title,Body,Tags,userPosted: User.result.name, userId: User.result._id},navigate))
    //console.log({Title ,Body ,Tags});
  }

  const handleEnter = (e) =>{
    if(e.key === 'Enter'){
      setBody(Body + "\n")
    }
  }

  return (
    <div className='ask-question'>
      <div className="ask-ques-container">
        <h1>Ask a public question</h1>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-container">
            <label htmlFor="ask-ques-title">
              <h4>Title</h4>
              <p>Be specific and imagine you're asking a question to another person</p>
              <input type="text" 
                id='aks-ques-title' 
                placeholder='e.g what is function in cpp'
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label htmlFor="ask-ques-body">
              <h4>Body</h4>
              <p>Include all the information someone would need to answer your question</p>
              <textarea name="" id="ask-ques-body" cols="30" rows="10" required
                onKeyPress={handleEnter} 
                onChange={(e) => setBody(e.target.value)}>
              </textarea>
            </label>
            <label htmlFor="ask-ques-tags">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input type="text" 
                id='aks-ques-tags' 
                placeholder='e.g (cpp c word java nodejs)'
                onChange={(e) => setTags(e.target.value.split(" "))}
                required
                />
            </label>
          </div>
          <button className='ask-que-btn'>Review your question</button>
        </form>
      </div>
    </div>
  
  )
}

export default AskQuestion