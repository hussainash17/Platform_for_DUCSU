const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const db = require('./config/db')

const users = require('./routes/api/users')
const posts = require('./routes/api/posts') 
const profile = require('./routes/api/profile')


const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

mongoose.connect(db.database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
}).then(() =>{
    console.log('Mongodb is connectes succesfully')
}).catch((error) => {
    console.log(error)
})

app.use(passport.initialize())
require('./config/passport')(passport)


app.use('/api/users', users)
app.use('/api/posts', posts)
app.use('/api/profile', profile)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running at PORT ' + PORT));