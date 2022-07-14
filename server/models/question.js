const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    Title: {type: String , required:"Question must have title"},
    Body: {type: String , required:"Question must have body"},
    Tags: {type: [String] , default:[] , required:"Question must have tags"},
    noOfAnswers: {type: Number , default: 0},
    upVote: {type: [String] , default: []},
    downVote: {type: [String] , default: []},
    userPosted: {type: String , required: "Question must have an author"},
    userId: { type: String},
    postedOn: {type: Date , default: Date.now },
    answer: [{
        answerBody: String,
        userAnswered: String,
        answeredOn: {type: Date , default: Date.now },
        userId: String,
    }]
})

module.exports = mongoose.model('Question' , questionSchema)