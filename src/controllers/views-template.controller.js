const { Router } = require('express')
const router = Router()

router.get('/login', async (req, res) => {
    try {
     res.render ('login', {style:'style.css'})   
    } catch (error) {
        console.error ('Error:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/signup', async (req, res) => {
    try {
     res.render ('signup', {style:'style.css'})   
    } catch (error) {
        console.error ('Error:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})

router.get('/profile', async (req, res) => {
    try {
    const { first_name,last_name,age,email} = req.session.user
     res.render ('profile', {
        user: {
            first_name,
            last_name,
            age,
            email,
        },
        style:'style.css'})   
    } catch (error) {
        console.error ('Error:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }
})


module.exports = router