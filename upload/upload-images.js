const {
    Router
  } = require('express');
  const router = new Router();
  const path = require('path');
  const multer = require('multer');
  // configuration multer 
  /*################################################################################### */
  //                          SPACE OF IMAGES NANYS
  /*################################################################################### */
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './content/public/images/club');
    },
    filename: function (req, file, cb) {
      cb(null, req.query.id + "_" + file.originalname)
    }
  });
  
  var upload = multer({
    storage: storage
  }).single('image');
  
  /*################################################################################### */
  //                         API 
  /*################################################################################### */
  router.post('/upload/images', upload, function (req, res, next) {
  
    console.log("done")
  
  })
  
  module.exports = router;