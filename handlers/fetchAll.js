const UserModel = require("../Schemas/User")

async function fetchAll(obj) {

    console.log("fetching all users in db", obj)

    let query = await UserModel.find().catch(console.error)
    
    if(!query || query.length===0) return null;

    console.log("users found", query)

    return query;

}

module.exports = fetchAll;