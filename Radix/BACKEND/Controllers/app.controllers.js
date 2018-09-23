const Parent = require('../Models/parent');
//const Child = require( '../Models/child' );
const appController = {};

//Sec functions
 appController.login = async(req, res) => {

 };

 appController.home = async(req, res) => {

 }


//Parent controllers
 appController.getParent = async(req, res) => {
   const parent = await Parent.find();
   res.json(parent);
}

 appController.createParent = async(req, res) => {
    const nparent = new Parent(req.body);
    await nparent.save();
    res.json({'Status:' : 'Parent Created'});
 }

 appController.deleteParent = async(req, res) => {
   await Parent.remove({_id : req.param.id});
   res.json({'Status: ': 'Deleted'});
 }

//Child controllers
 appController.getChild = async(req, res) => {

 }

appController.createChild = async(req, res) => {

}



module.exports = appController;
