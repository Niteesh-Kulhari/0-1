const { Router } = require("express");
const router = Router();
const{User, Course} = require("../db");
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username: username,
        password: password
    })
    .then(function(){
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

router.get('/courses', async (req, res) => {
    const response = await Course.find({});

    res.json({
        Courses: response
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    const courseId = req.params.courseId;
    const username  = req.headers.username;

    Course.updateOne({
        username: username
    },{
        "$push": {
            purchasedCourses: courseID
        }
        
    }).catch((e)=>{
        console.log(e)
    });

    re.json({
        msg: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {

    const user =  await User.findOne({
        username: username
    })

    const course = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: course
    })
});

module.exports = router