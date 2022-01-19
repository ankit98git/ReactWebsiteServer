const UserModel = require("../Schemas/User")

async function addUsertoDb(obj) {

    let query = new UserModel({
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password
    })

    await query.save().catch(console.error)

    console.log("Added user to database", query)

    return query;

}

module.exports = addUsertoDb;