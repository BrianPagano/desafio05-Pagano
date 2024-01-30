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

router.get('/profile', async (req, res, next) => {
    try {
        if (req.session.user) return next ()
        res.redirect('login')
    } catch (error) {
        console.error ('Error:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }},async (req, res) => {
    try {
        const { user } = req.session
        res.render ('profile', { user , style:'style.css'})   
    } catch (error) {
        console.error ('Error:', error.message)
        res.status(500).json({ error: 'Internal Server Error' })
    }})


module.exports = router