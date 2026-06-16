let express = require("express")
let router= express.Router();

let {senddirectmessage,getdirectmessage,markmessagesread,unreadcount,getchatlist} = require("../controllers/directmessagecontroller")

router.post("/",senddirectmessage)
router.get("/:senderid/:receiverid",getdirectmessage)
router.put("/read/:senderid/:receiverid",markmessagesread)
router.get("/unread/:profileid",unreadcount)
router.get("/chatlist/:profileid",getchatlist)
module.exports=router