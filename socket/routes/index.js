var express = require('express');
var router = express.Router();


const indexController=require('../controllers/index');



router.get('/',indexController.mainPage);

        

module.exports=router;
