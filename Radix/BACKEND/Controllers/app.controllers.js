const Parent = require('../Models/parent');
//const Child = require( '../Models/child' );
const appController = {};

//Sec functions
 appController.login = async(req, res) => {

 };

 appController.home = async(req, res) => {

 }

 appController.register = async(req, res) => {

 }


//Parent controllers
 appController.getParent = async(req, res) => {
     const { id } = req.params;
     const parent = await Parent.findById(id);
     res.json(parent);
 }

 appController.createParent = async(req, res) => {
     const parent = new Parent({
      email: req.body.email,
      password: req.body.password,
      number: req.body.number,
      name: req.body.name,
      id: req.body.id,
      relationship: req.body.relationship
  });
  await parent.save();
  res.json({status: 'Parent created'});
 }

//Child controllers
 appController.getChild = async(req, res) => {

 }

appController.createChild = async(req, res) => {
    const child = new Child({
     name: req.body.name,
     id: req.body.id,
     age: req.body.age,
     gender: req.body.gender,
     background: req.body.background,
     etnhic: req.body.etnhic
 });
 await child.save();
 res.json({status: 'Child created'});
}



module.exports = appController;
