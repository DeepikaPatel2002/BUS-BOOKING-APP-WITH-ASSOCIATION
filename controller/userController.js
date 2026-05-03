

const User = require('../models/user');

exports.createUser = async (req, res) => {

    try {

        const { name, email } = req.body;
        const newUser = await User.create({
            name: name,
            email: email
        });

        res.status(201).json(newUser);
    }
    catch (err) {
        res.status(500).json({ 'error': err.message });
    }
}

