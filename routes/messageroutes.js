let express = require("express")
let router = express.Router()

let {sendmessage,getgroupmessage} = require("../controllers/messagecontroller")
let {groupchatpreview} = require("../controllers/groupcontroller")

router.post("/chat",sendmessage)
router.get("/getting/:groupid/:profileid",getgroupmessage)
router.get("/chatpreview/:profileid",groupchatpreview)

module.exports=router