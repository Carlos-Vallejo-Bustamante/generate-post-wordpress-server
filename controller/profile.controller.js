const UserModel = require('../models/User.model')

const GetUser = (req, res) => {
    console.log('USERRRR', req.user);
    if (req.user) {
        UserModel
            .findById(req.user._id).select('email name')
            .then((user) => {
                if (user) {
                    res.status(200).json(user)
                } else {
                    res.sendStatus(404);
                }
            })
    } else {
        res.sendStatus(401);
    }
}

module.exports = GetUser;