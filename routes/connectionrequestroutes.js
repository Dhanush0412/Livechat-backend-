let express = require("express")
let router = express.Router();

let {sendrequest,pendingrequest,acceptrequest,rejectrequest,getconnections}= require("../controllers/connectionrequestcontroller")

router.post("/send/:senderid",sendrequest);
router.get("/pending/:profileid",pendingrequest);
router.put("/accept/:requestid",acceptrequest);
router.put("/reject/:requestid",rejectrequest);
router.get("/list/:profileid",getconnections);
module.exports=router;