const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const sql = require("./utils/db")
const app = express()
const corsConfig = require("./utils/cors-service")

app.use(express.json())

app.use(corsConfig)

const port = 3000

app.listen(port, ()=>{ console.log('Listening on port ' + port) })

app.post('/auth/login', (req, res)=>{
    const username = req.body.username
    const password = req.body.password

    const query = sql.query("SELECT user_id, username, profile_picture, is_admin FROM user WHERE username=? AND password=?",
    [username, password],
    (err, result)=>{
        if(err) return res.send(err)
        if(result.length == 0) return res.status(500).send({error: 'user not found!'})
        const token = jwt.sign({
            username: username
        }, 'secret', {expiresIn: '1h'})
        return res.send({
            "userInfo": result[0],
            "accessToken": token
        })
    })
})

app.get("/test", (req, res)=>{
    const result = sql.query("SELECT * FROM user", (err, result)=>{
        if(err) {
            res.send(err)
        }
        res.send(result)
    })
})