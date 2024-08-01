
const Users = require("../model/user")

exports.get_user = async function(req, res){
    try {
        const users = await Users.findAll();
        res.send(users);
    }
    catch(err) {
        console.log(err);
    }
}

exports.get_userById = async function(req, res){
    const id = req.params.id;
    try {
        const users = await Users.findOne({
            where:{
                id:id
            }
        });
        res.send(users);
    }
    catch(err) {
        console.log(err);
    }
}

