import React from 'react'
import { useSelector } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

const HomeMainbar = () => {

  const location = useLocation()
  const navigate = useNavigate()
  var user = useSelector((state) => (state.currentUserReducer))

  const questionsList = useSelector((state) => (state.questionReducer))
  //console.log(questionsList.data);

  const checkAuth = () => {
    if(user===null){
      alert('login or signup to ask question')
      navigate('/Auth')
    }else{
      navigate('/AskQuestion')
    }
  }

  return (
    <div className='main-bar'>
      <div className='main-bar-header'>
          {
            location.pathname === '/' ? 
            <h1>Top Questions</h1> :
            <h1>All Questions</h1>
          }
          <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
      </div>
      <div>
          {
            questionsList.data === null ? 
            <h1>Loading...</h1> :
            <>
              <p>{ questionsList.data.length } questions</p>
              <QuestionList questionsList={questionsList.data} />
            </>
          }
      </div>
    </div>
  )
}

export default HomeMainbar