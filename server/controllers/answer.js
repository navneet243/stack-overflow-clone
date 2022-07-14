const mongoose = require('mongoose')
const Question = require('../models/question')

const postAnswer = async (req,res) => {
    const {id: _id} = req.params;
    const { noOfAnswers, answerBody, userAnswered ,userId} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('question unavailable...')
    }
    updateNoOfAnswer(_id , noOfAnswers)
    try{
        const updatedQuestion = await Question.findByIdAndUpdate(_id,{$addToSet: {'answer': [{answerBody,userAnswered,userId}]}})
        res.status(200).json(updatedQuestion)
    }catch(err){
        res.status(400).json({msg:err.message})
    }
}

const updateNoOfAnswer = async (_id,noOfAnswers) => {
    try {
        await Question.findByIdAndUpdate(_id,{ $set : {'noOfAnswers' : noOfAnswers}})
    } catch (err) {
        console.log(err);
    }
}   

const deleteAnswer = async (req,res) => {
    const { id: _id} = req.params;
    const {answerId , noOfAnswers} = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Invalid Id')
    }
    if(!mongoose.Types.ObjectId.isValid(answerId)){
        return res.status(404).send('Answer Unavailable...')
    }
    updateNoOfAnswer(_id ,noOfAnswers)
    try {
        await Question.updateOne(
            {_id},
            {$pull: {'answer' : {_id: answerId}}}
        )
        res.status(200).json({message: "Answer deleted successfully"})
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

module.exports = {postAnswer,updateNoOfAnswer,deleteAnswer}


