import React,{useState} from 'react'
import { useParams,Link, useNavigate, useLocation} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import sortup from '../../utils/sortup.svg'
import sortdown from '../../utils/sortdown.svg'
import Avatar from '../../Components/Avatar/Avatar'
import './Questions.css'
import DisplayAnswers from './DisplayAnswers'
import { deleteQuestion, postAnswer ,voteQuestion } from '../../actions/question'


const QuestionDetails = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [answer, setAnswer] = useState('')
    const questionsList = useSelector(state => state.questionReducer)
    //console.log(questionsList);

    const user = useSelector((state) => (state.currentUserReducer))
    //console.log(user.result._id)

    const handlePostAnswer = (e,answerLength) => {
        e.preventDefault()
        if(user === null) {
            alert('login or signup to answer')
            navigate('/Auth')
        }else{
            if(answer === ''){
                alert('Enter an answer before submitting')
            }else{
                dispatch(postAnswer({id ,noOfAnswers: answerLength+1 , answerBody: answer ,userAnswered: user.result.name ,userId: user.result._id}))
            }
        }
    }

    const url = 'https://localhost:3000'
    const handleShare = () => {
        copy(url+location.pathname)
        alert('Copied url : '+url+location.pathname)
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(id,navigate))
    }

    const handleUpVote = () => {
        dispatch(voteQuestion(id , 'upVote' , user.result._id))
    }

    const handleDownVote = () => {
        dispatch(voteQuestion(id , 'downVote' , user.result._id))
    }
    
  return (
    <div className='question-details-page'>
        {
            questionsList.data === null ?
            <h1>Loading...</h1> :
            <>
                {
                    questionsList.data.filter(question => question._id ===id ).map(question=>(
                        <div key={question._id}>
                            <section className='question-details-container'>
                                <h1>{question.Title}</h1>
                                <div className="question-details-container-2">
                                    <div className="question-votes">
                                        <img src={sortup} alt="" width={15} className='votes-icon' onClick={handleUpVote}/>
                                        <p>{question.upVote.length - question.downVote.length}</p>
                                        <img src={sortdown} alt="" width={15} className='votes-icon' onClick={handleDownVote}/>
                                    </div>
                                    <div style={{width: '100%'}}>
                                        <p className='question-body'>{question.Body}</p>
                                        <div className='question-details-tags'>
                                            {
                                                question.Tags.map((tag) => (
                                                    <p key={tag}>{tag}</p>
                                                ))
                                            }
                                        </div>
                                        <div className="question-actions-user">
                                            <div>
                                                <button type='button' onClick={handleShare} >Share</button>
                                                {
                                                    user?.result?._id === question?.userId && (
                                                        <button type='button' onClick={handleDelete} >Delete</button>
                                                    )
                                                }
                                            </div>
                                            <div>
                                                <p>asked {moment(question.postedOn).fromNow()}</p>
                                                <Link to={`/User/${question.userId}`} className='user-link ' style={{color:'#0086d8'}}>
                                                    <Avatar backgroundColor='orange' px='8px' py='5px'>
                                                        {question.userPosted.charAt(0).toUpperCase()}
                                                    </Avatar>
                                                    <div>
                                                      {question.userPosted}
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {
                                question.noOfAnswers !== 0 && (
                                    <section>
                                        <h3>{question.noOfAnswers} Answers</h3>
                                        <DisplayAnswers key={question._id} question={question} handleShare={handleShare}/>
                                    </section>
                                )
                            }
                            <section className='post-ans-container'>
                                <h3>Your Answers</h3>
                                <form onSubmit={(e) => {handlePostAnswer(e,question.answer.length) }} >
                                    <textarea name="" id="" cols="30" rows="10" onChange={e => setAnswer(e.target.value)}></textarea>
                                    <input type="submit" className='post-ans-btn' value='Post Your Ans'/>
                                </form >
                                <p>
                                    Browse other question tagged 
                                    {
                                        question.Tags.map((tag) => (
                                            <Link to='/Tags' key={tag} className='ans-tags'>{tag}</Link>
                                        ))
                                    } or
                                    <Link to='/AskQuestion' style={{textDecoration:'none' ,color:'#009dff'}}> ask your question</Link>
                                </p>
                            </section>
                        </div>
                    ))
                }
            </>
        }
    </div>
  )
}

export default QuestionDetails