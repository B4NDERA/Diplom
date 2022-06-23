const teachersSchema = require("../models/adminModel")
const courseSchema = require("../models/courseModel")
const userSchema = require("../models/userModel")
const bcrypt = require("bcrypt")
const mailingListSchema = require("../models/mailingListModel")
const feedbackSchema = require("../models/feedbackModel")
const Serializer = require("sequelize-to-json")
const jwt = require("jsonwebtoken")


module.exports.createTeacher = async (req, res) => {
    const data = req.body[0];
    const teacher = {
        name: data.firstName,
        surname: data.lastName,
        position: data.position,
        quote: data.quote,
    }

    try{
        await teachersSchema.create(teacher)
    }

    catch(e){
        console.log(e);
    }
    res.status(200).json({success: true,})

}

module.exports.createFeedback = async (req, res) => {
    const data = req.body[0];
    const feedback = {
        name: data.name,
        surname: data.surname,
        email: data.email,
        phone: data.phone,
        message: data.message,
    }

    try{
        await feedbackSchema.create(feedback)
    }

    catch(e){
        console.log(e);
    }
    res.status(200).json({success: true,})

}

module.exports.createCourse = async (req, res) => {
    const data = req.body[0];
    const course = {
        name: data.name,
        description: data.description,
    }

    try{
        await courseSchema.create(course)
    }

    catch(e){
        console.log(e);
    }
    res.status(200).json({
        success: true, 
        // course:  course,
    })

}

module.exports.createMailingList = async (req, res) => {
    const data = req.body[0];
    const mailing_list = {
        email: data.email,
    }

    try{
        await mailingListSchema.create(mailing_list)
    }

    catch(e){
        console.log(e);
    }
    res.status(200).json({
        success: true, 
        // course:  course,
    })
}
module.exports.getTeachers = async (req, res) => {
    try{
        const teachers = await teachersSchema.findAll();
        const teachersJson = Serializer.serializeMany(teachers, teachersSchema)
        res.status(200).json({
            success: true, 
            teachers:  teachersJson,
        })
    } catch(e){
        console.log(e);
    }
}

module.exports.getCourse = async (req, res) => {
    try{
        const courses = await courseSchema.findAll();
        const courseJson = Serializer.serializeMany(courses,courseSchema)
        res.status(200).json({
            success: true, 
            courses: courseJson,
        })
    } catch(e){
        console.log(e);
    }
}



module.exports.register = async (req, res) => {
    const { login, email, password } = req.body
    try {
        await userSchema.findOne({ 
            where: {
                email: email 
            }
        }).then((checkUser) => {
            if (checkUser) {
                res.status(404).json({error:{errorMessage:["Your email already exited"]}})
            } else {
                bcrypt.hash(password, 10).then((password) => {
                    const data = {
                        login: login,
                        email: email,
                        password: password,
                    }
                    userSchema.create(data).then((userCreate) => {
                        const token = jwt.sign({
                            id: userCreate.id,
                            email: userCreate.email,
                            login: userCreate.login,
                            registerTime: userCreate.createAt
                        }, process.env.SECRET, {expiresIn: process.env.TOKEN_EXP})
            
                        const options = {
                            expires: new Date(Date.now() + process.env.COOKIE_EXP*24*60*60*1000)
                        }
            
                        if (email === "admin@gmail.com") {
                            res.status(201).cookie("authTokenBuild", token, options).json({
                                isAdmin: true, 
                                token
                            })
                        } else {
                            res.status(201).cookie("authTokenBuild", token, options).json({
                                isAdmin: false, 
                                token
                            })
                        }
                    })
                })
                
    
            }
        })
    } catch(error) {
        res.status(404).json({error:{errorMessage:["Internal server error"]}})
    }
}

module.exports.userLogout = async (req, res) => { 
    res.status(201).cookie("authTokenBuild", "").json({
        success: true,
    })
}

