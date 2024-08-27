const { Router } = require('express')
const AdminMiddleware = require('../middleware/admin')
const {Admin,User,Course} = require('../db')
const mongoose=require('mongoose')
const {JWT_SECRET}=require("../config")
const jwt=require('jsonwebtoken')
const router=Router()

router.post('/signup',async(req,res)=>{
    username=req.body.username
    password=req.body.password

    await Admin.create({
        username,
        password
    })
    res.json(
        {"msg":"Admin Created Successfully"})
})

router.post('/courses',AdminMiddleware,async(req,res)=>{
    const title=req.body.title    
    const description=req.body.description
    const imageLink=req.body.imageLink        
    const price=req.body.price        

    const newCourse=await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        "msg":"course created successfully",
        "course Id":newCourse.__id
    })
})

router.get('/courses',async(req,res)=>{
    const Courses = await Course.find({})
    res.json({
        "courses":Courses
    })    
})
module.exports=router
