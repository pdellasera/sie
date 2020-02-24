mvc.api({
    name: "upload",
    action: "images",
    methods: {
        post: upload
    }
}, function (req, send){ send({ error: "method not allowed", errorCode: 404 }) });
function upload (req, send) {
 console.log(req)
  const multer = require('multer');
  // configuration multer 
  /*################################################################################### */
  //                          SPACE OF IMAGES NANYS
  /*################################################################################### */
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './content/public/img');
    },
    filename: function (req, file, cb) {
      console.log(file)
      cb(null,  req.query.id + "_" + file.originalname)
    }
  });
  
 multer({storage: storage}).single('image');
  
 
}