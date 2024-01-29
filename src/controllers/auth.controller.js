const { Router } = require('express')
const Users = require('../DAO/models/user.model')
const router = Router()


router.post ('/', async (req, res) => {
    try {
        const {email,password} = req.body
        const user = await Users.findOne({email})
        if (!user) {
            return res.status(400).json({ message: 'bad Request' })
        }
        if (user.password !== password) {
           return res.status(400).json({ message: 'bad Request' })
        }

        const lowercaseEmail = email.toLowerCase();

        req.session.user = {
            first_name: user.first_name,
            last_name: user.last_name,
            email: lowercaseEmail,
            age: user.age,
        }
        res.json ({status: 'success', message: 'Login Succesfull'})
     } catch (error) {
        console.error ('Error:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


module.exports = router