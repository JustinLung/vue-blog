const express = require('express')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty'), multipartyMiddleWare = multipart({ uploadDir: './uploads' })
const jwt = require('jsonwebtoken')
const sql = require("./utils/db")
const app = express()
const corsConfig = require("./utils/cors-service")
const crypto = require('crypto')
const fs = require('fs')

app.use(express.json())

app.use(corsConfig)

const port = 3000

app.listen(port, () => { console.log('Listening on port ' + port) })

if (!fs.existsSync('./uploads')) fs.mkdirSync('./uploads')

app.get('/image/:username/:id', (req, res) => {
    const id = req.params.id
    const username = req.params.username
    res.sendFile(`${__dirname}/uploads/${username}/${id}`)
})

app.post('/auth/login', (req, res) => {
    const username = req.body.username
    let password = req.body.password

    password = crypto.createHmac("sha256", "password")
        .update(password)
        .digest("hex")

    const hashedUsername = crypto.createHmac('sha1', 'username').update(username).digest('hex')

    const query = sql.query("SELECT username, profile_picture FROM user WHERE username=? AND password=?",
        [username, password],
        (err, result) => {
            if (err) return res.send(err)
            if (result.length == 0) return res.status(500).send({ error: 'user not found!' })
            const token = jwt.sign({
                username: username
            }, 'secret', { expiresIn: '1h' })
            result[0].hashedUsername = hashedUsername
            return res.send({
                "userInfo": result[0],
                "accessToken": token
            })
        })
})

app.post('/auth/register', multipartyMiddleWare, (req, res) => {
    const username = req.body.username
    let password = req.body.password
    let image;
    if(req.files && Object.keys(req.files).length != 0) {
        image = req.files.image.path.split("uploads\\").pop()
    } else {
        image = null
    }
    const date = new Date()
    const mysqlDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
    console.log("ja hier komt ie");
    

    password = crypto.createHmac("sha256", "password")
        .update(password)
        .digest("hex")

    const hashedUsername = crypto.createHmac('sha1', 'username').update(username).digest('hex')

    const query = sql.query("INSERT INTO `user` VALUES(NULL, ?, ?, ?, ?, ?, 0)",
    [username, password, image, mysqlDate, mysqlDate],
    (err, result)=>{
        if(err){
            if(image) {
                fs.unlinkSync(`./uploads/${image}`)
            }
            return res.send(err)
        }
        if(image) {
            if(!fs.existsSync(`./uploads/${hashedUsername}`)) fs.mkdirSync(`./uploads/${hashedUsername}`);
            fs.renameSync(`./uploads/${image}`, `./uploads/${hashedUsername}/${image}`)
        }
        return res.send(result)
    })
})

app.get("/test", (req, res) => {
    const result = sql.query("SELECT * FROM user", (err, result) => {
        if (err) return res.send(err)
        return res.send(result)
    })
})