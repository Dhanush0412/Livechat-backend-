let express = require("express")
let router = express.Router();
let upload= require("../config/multer")
let {createpost,getfeed,likes,unlike,getpost,getmyposts} = require("../controllers/postcontroller")
router.post("/create/:profileid",upload.single("media"),createpost);
router.put("/likes/:postid/:profileid",likes)
router.put("/unlike/:postid/:profileid",unlike)
router.get("/feed/:profileid",getfeed)
router.get("/search",getpost)
router.get("/getmypost/:profileid",getmyposts)
module.exports=router