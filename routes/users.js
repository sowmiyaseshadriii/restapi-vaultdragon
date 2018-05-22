const express=require('express');
const router=require('express-promise-router')();
const UsersController=require('../controllers/usersController');
const {validateParam,validateBody, schemas}=require('../helpers/routeHelpers');

router.route('/')
.get(UsersController.index)
.post(validateBody(schemas.keySchema),UsersController.newUser);

router.route('/:key')
 .get(validateParam(schemas.idSchema,'key'),UsersController.getUser)
 .put([validateParam(schemas.idSchema,'key'),
 validateBody(schemas.keySchema)],
  UsersController.replaceUser)
.patch([validateParam(schemas.idSchema,'key'),
validateBody(schemas.keyOptionalSchema)],
UsersController.updateUser);


router.route('/key')
 .get(UsersController.getTimeStampUser);


 //.patch(UsersController.updateUser);

module.exports=router;