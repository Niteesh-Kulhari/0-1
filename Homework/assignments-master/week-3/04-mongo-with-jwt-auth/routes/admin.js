const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const{Admin, Course, User} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
// Admin Routes
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    }).then(function(){
        res.json({
            msg: "User created successfully"
        })
    })
    .catch(function(){
        res.json({
            msg: "User not created"
        })
    })
});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    const user = await User.find({
        username,
        password
    })

    if(user){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
    
        res.json({
            token
        })
    }else{
        res.status(411).json({
            msg: " Incorrect email and pass"
        })
    }
    

});

router.post('/courses', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = await Course.create({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    })
    res.json({
        msg: "Course created successfully",
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    
    const courses = await Course.find({})

    res.json({
        course: courses
    })

});

module.exports = router;