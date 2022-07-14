const mongoose =  require('mongoose')
const User = require('../models/userModel')

const getAllUsers = async (req,res) => {
    try {
        const allUsers = await User.find();
        //console.log(allUsers);
        const allUserDetails = []
        allUsers.forEach(user => {
            allUserDetails.push({
                _id: user._id,
                name: user.name,
                about: user.about,
                tags: user.tags, 
                joinedOn: user.joinedOn,
            })
        })
        res.status(200).json(allUserDetails);
    } catch (err) {
        res.status(404).json({message : err.message});
    }
}

const updateProfile = async (req,res) => {
    const {id: _id} = req.params;
    const {name,about,tags} = req.body;
    //console.log({name,about,tags});
    //console.log({_id});

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('user unavailable...')
    }
    try {
        const updatedProfile = await User.findByIdAndUpdate(_id ,{ $set: {'name': name ,'about':about , 'tags':tags}},{new: true})
        //console.log({updatedProfile});
        res.status(200).json(updatedProfile)
    } catch (err) {
        res.status(405).json({message: err.message})
    }
}

module.exports = {getAllUsers , updateProfile}