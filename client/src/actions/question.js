
import * as api from '../api/api'

const askQuestion = (quesData,navigate) => async (dispatch) => {
  try{
    const {data} = await api.postQuestion(quesData)
    dispatch({type: 'POST_QUESTION' , payload:data})
    dispatch(getAllQuestion())
    navigate('/')
  }catch(err){
    console.log(err);
  }
}

export const getAllQuestion = () => async (dispatch) => {
  try{
    //console.log("getData");
    const {data} = await api.getQuestion()
    dispatch({type: 'FETCH_ALL_QUESTIONS' ,payload: data})
  }catch(err){
    console.log(err);
  }
}

export const deleteQuestion = (id,navigate) => async (dispatch) => {
  try {
    await api.deleteQuestion(id)
    dispatch(getAllQuestion())
    navigate('/')
  } catch (err) {
    console.log(err);
  }
}

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const {id ,noOfAnswers,answerBody,userAnswered,userId} = answerData
    const {data} = await api.postAnswer(id ,noOfAnswers,answerBody,userAnswered,userId)
    dispatch({type: 'POST_ANSWER' ,payload: data})
    dispatch(getAllQuestion())
  } catch (err) {
    console.log(err);
  }
}

export const deleteAnswer = ( id,answerId,noOfAnswers) => async (dispatch) => {
  try {
    await api.deleteAnswer(id,answerId,noOfAnswers)
    dispatch(getAllQuestion())
  } catch (err) {
    console.log(err);
  }
}

export const voteQuestion = (id ,value ,userId) => async (dispatch) => {
  try {
    await api.voteQuestion(id,value,userId)
    dispatch(getAllQuestion())
  } catch (err) {
    console.log(err);
  }
}

export default askQuestion



