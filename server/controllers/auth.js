const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const users = require('../models/userModel.js');
const createError = require('http-errors')
const { authUserSchema } = require('../middlewares/validators.js');


const userController = {
    signup : async (req,res,next) => {
        try{
            const {name , email ,password} = req.body;
            const result = await authUserSchema.validateAsync(req.body)
            const user = await users.findOne({email});
            if(user){
                return res.status(404).json({msg : "User already exists"})
            }

            const hashedPassword = await bcrypt.hash(password,12)
            const newUser = await users.create({
                name: name,
                email: email,
                password: hashedPassword,
            });
            await newUser.save();
            //console.log(newUser);
            const token = jwt.sign({email: newUser.email , id: newUser._id} , process.env.TOKEN_SECRET ,{expiresIn: '1h'})
            res.status(200).json({result: newUser ,token})
        }catch(err){
            if(err.isJoi === true) err.status = 422
            next(err)
            //return res.status(500).json({msg :err.message})
        }
    },

    login : async (req,res,next) => {
        try{
            const {email ,password} = req.body;
            const result = await authUserSchema.validateAsync(req.body)
            const user = await users.findOne({email});
            if(!user){
                return res.status(404).json({message: "No user found"})
            }
            const pass = await bcrypt.compare(password , user.password)
            if(!pass){
                return res.status(400).json({message: "Invalid password"})
            }
            const token = jwt.sign({email: user.email , id: user._id} , process.env.TOKEN_SECRET ,{expiresIn: '1h'})
            res.status(200).json({result: user ,token})
        }catch(err){
            if(err.isJoi === true)
                return next(createError.BadRequest('Invalid Username/Password'))
            next(err)
        }
    }
}

module.exports = userController;