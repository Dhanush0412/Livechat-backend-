let Profile = require("../models/profile")

let getchatlist = async(req,res)=>{
    try {
        let profileid = req.profileid
        let profile = await Profile.findById(profileid)
        .populate({
            path:"connections",
            populate:{
                path:"user"
            }
        })
        if(!profile){
            return res.status(404).send("profile not found")
        }
    return res.json(profile.connections.map(

    (connection)=>({
    profileid:connection._id,
    username:connection.user.username,
    profilepic:connection.profilepic
     })
     )) 
    } catch (error) {
        console.log(error)
        return res.status(500).send("internal error")
    }
}

module.exports=getchatlist;