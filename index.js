const express=require('express')
const bodyParser=require('body-parser')
const app=express()
const adminRouter=require('./routes/admin')
const UserRouter=require('./routes/user')

app.use(bodyParser.json())
app.use('/admin',adminRouter)
app.use('/user',UserRouter)

app.listen(3000)