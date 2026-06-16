let Profile = require("../models/profile")

let getchatlist = async(req,res)=>{
    try {
        let {profileid} = req.params
        let profile = await Profile.findById(profileid)
        .populate({
            path:"connections",
            populate:{
                path:"user"
            }
        })
        return res.json(profile.connections)
        
    } catch (error) {
        console.log(error)
        return res.send("internal error")
    }
}

module.exports=getchatlist;