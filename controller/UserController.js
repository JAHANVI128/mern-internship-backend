const userSchema = require('../model/UserModel')

const getAllUsers = (req,res) => {

    userSchema.find().populate('userrole').then((data) => {
        res.status(200).json({
            data:data,
            message:'All users are fetched successfully',
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:'Error in  fetching data',
            flag:0
        })
    })
}

const createUser = (req,res) => {

    console.log(req.body);
    // res.send("create user called");
    const user = new userSchema(req.body)

    user.save().then((data) => {
        res.status(201).json({
            data : data,
            message:"User created successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in creating user",
            flag:0
        })
    })
}

const deleteUser = (req,res) => {
    const id = req.params.id;
    console.log(id);
    userSchema.findByIdAndDelete(id).then((data) => {
        res.status(200).json({
            data:data,
            message:"User deleted successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"Error in deleting user",
            flag:0
        })
    })
}

const updateUser = (req,res) => {
    var id = req.params.id;
    var newuser = req.body;
    console.log(id);
    console.log(newuser);

    userSchema.findByIdAndUpdate(id,newuser).then((data) => {
        res.status(200).json({
            data:data,
            message:"user updated successfully",
            flag:1
        })
    }).catch((err) => {
        res.status(500).json({
            message:"error in updating user",
            flag:0
        })
    })
}
module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser
}