const express = require('express');
const { AskQuestion, getAllQuestion ,deleteQuestion ,voteQuestion} = require('../controllers/questionController');
const auth = require('../middlewares/auth');

const router = express.Router();

router.post('/Ask' ,auth, AskQuestion)
router.get('/get', getAllQuestion)
router.delete('/delete/:id' ,auth,  deleteQuestion)
router.patch('/vote/:id' ,auth, voteQuestion)

module.exports = router