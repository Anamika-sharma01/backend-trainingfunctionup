const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// CREATE USER API---------------------------------------------
const createUser = async function (req, res) {
try{
  let data = req.body;
  let savedData = await userModel.create(data);
  // console.log(req.newAtribute);
  res.status(201).send({ msg: savedData });
}
catch(err){
  res.status(500).send({msg:err})
}
};


// USER LOGIN API----------------------------------------------
const loginUser = async function (req, res) {
 try{
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(401).send({
      status: false,
      msg: "username or the password is not corerct",
    });
  let token = jwt.sign(
    {
      userId: user._id.toString(),

    },
    "functionup-plutonium"
  );
  res.setHeader("x-auth-token", token);
  //console.log(res)
  res.status(200).send({ status: true, token: token });

 }
 catch(err){
  res.status(500).send({msg:err})
 }

};


// GET USER DATA API----------------------------------------------------
const getUserData = async function (req, res) {
  try{
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });
    res.status(200).send({ status: true, data: userDetails });

  }
  catch(err){
    res.status(500).send({msg:err})
  }
};




// UPDATE USER DETAILS API------------------------------------------------
const updateUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
    res.status(200).send({ status: true, msg: "Data Updated" });

  }
  catch(err){
  res.status(500).send({msg:err})
  }
};





// DELETE USER API----------------------------------------------------
const deleteUser = async function (req, res) {
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    //Return an error if no user with the given id exists in the db
    if (!user) {
      return res.status(404).send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId },
      { $set: { isDeleted: true } }
      , user);
    res.status(200).send({ status: true, msg: "User Delete (isDeleted is set as True)" });

  }
  catch(err){
    res.status(500).send({msg:err})
  }
};



module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser