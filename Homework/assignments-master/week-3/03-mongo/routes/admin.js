const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const{Admin, Course} = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({
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

router.get('/courses', adminMiddleware, (req, res) => {
    Course.find({})
            .then(function(response){
                res.json({
                    courses: response
                })
            })
});

module.exports = router;