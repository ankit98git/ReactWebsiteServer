const UserModel = require("../Schemas/User")

async function sendUser(obj) {

    console.log("finding user in db", obj)

    let query = await UserModel.findOne({email: obj.email, password: obj.password}).catch(console.error)
    
    if(query==null) return null;

    console.log("user found", query)

    return query;

}

module.exports = sendUser;