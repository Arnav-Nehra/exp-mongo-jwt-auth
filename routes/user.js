const {Router}=require('express')
const {User}=require("../db")
const UserMiddleware=require('../middleware/user')
const {JWT_SECRET}=require("../config")
const router=Router()
const jwt=require('jsonwebtoken')


router.post('/signup',async(req,res)=>{
    username=req.body.username
    password=req.body.password

    await User.create({
        username,
        password
    })
    res.json({
        "msg":"User Created Successfully"
    })
})
router.post('/signin',async(req,res)=>{
    const username=req.body.username
    const password=req.body.password

    const user=await User.find({
        username,
        password
    })
    if(user){
        const token=jwt.sign({
            username
        },JWT_SECRET)
    res.json({
        token
    })
    }
    else{
        res.json(411).json({
            'msg':'user not exist'
        })
    }
}
)
router.post('/courses/:courseid',UserMiddleware,async(req,res)=>{
    const username=req.username
    const courseid=req.params.courseid
    await User.updateOne(
    {
       username
    },
    {
    "$push":{
        purchasedCourses:courseid
    }
    }
)
    res.json({
        "msg":"Course Added Successfully"
    })
}
)
module.exports=router
