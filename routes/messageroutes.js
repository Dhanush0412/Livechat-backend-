let express = require("express")
let router = express.Router()

let {sendmessage,getgroupmessage} = require("../controllers/messagecontroller")

router.post("/",sendmessage)
router.get("/:groupid",getgroupmessage)

module.exports=router