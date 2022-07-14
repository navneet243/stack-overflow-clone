const mongoose = require('mongoose')
const createError = require('http-errors')
const { authQuestionSchema } = require('../middlewares/validators')

const Question = require('../models/question')

const questionController = {
    AskQuestion : async (req,res,next) => {
        try{
            const {Title,Body,Tags,userPosted,userId} = req.body
            const result = await authQuestionSchema.validateAsync(req.body)
            const postQuestion = new Question({Title,Body,Tags,userPosted,userId})
            await postQuestion.save();
            res.status(200).json("Posted a question successfully")
        }catch(err){
            if(err.isJoi === true){
                next(createError(400, err.message))
                return
              }
            next(err)
            //res.status(409).json("couldn't post a new question")
        }
    },

    getAllQuestion : async (req,res) => {
        try{
            const questionList = await Question.find();
            res.status(200).json(questionList)
        }catch(err){
            res.status(404).json("couldn't get all question")
        }
    },

    deleteQuestion : async (req,res) => {
        const { id: _id} = req.params;
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).send('Invalid Id')
        }
        try {
            const ques = await Question.findByIdAndRemove(_id)
            if(!ques){
                throw createError(404,"Question does not exist")
            }
            res.status(200).json({message: "deleted successfully"})
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    },

    voteQuestion : async (req,res) => {
        const {id: _id} =  req.params;
        const {value,userId} = req.body;
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(404).send('Invalid Id')
        }
        try {
            const question = await Question.findById(_id)
            const upIndex = question.upVote.findIndex((id) => id === String(userId))
            const downIndex = question.downVote.findIndex((id) => id === String(userId))

            if(value==='upVote'){
                if(downIndex !== -1){
                    question.downVote = question.downVote.filter((id) => id !== String(userId))
                }
                if(upIndex === -1){
                    question.upVote.push(userId)
                }else{
                    question.upVote = question.upVote.filter((id) => id !== String(id))
                }
            }
            else if(value==='downVote'){
                if(upIndex !== -1){
                    question.upVote = question.upVote.filter((id) => id !== String(userId))
                }
                if(downIndex === -1){
                    question.downVote.push(userId)
                }else{
                    question.downVote = question.downVote.filter((id) => id !== String(id))
                }
            }
            await Question.findByIdAndUpdate( _id , question)
            res.status(200).json({message: "votes successfully"})
        } catch (err) {
            res.status(404).json({message: "Id not found"})
        }
    }
    
}

module.exports = questionController