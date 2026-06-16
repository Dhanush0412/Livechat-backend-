let express = require("express")
let router= express.Router();

let {senddirectmessage,getdirectmessage,markmessagesread} = require("../controllers/directmessagecontroller")

router.post("/",senddirectmessage)
router.get("/:senderid/:receiverid",getdirectmessage)
router.put("/read/:senderid/:receiverid",markmessagesread)

module.exports=router