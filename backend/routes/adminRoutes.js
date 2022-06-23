const router = require("express").Router()
const { createTeacher, createCourse, getTeachers, register, getCourse, createMailingList, createFeedback } = require("../controller/adminController")

router.post("/create-teacher", createTeacher)
router.post("/register", register)
router.post("/create-course", createCourse)
router.post("/create-mailings", createMailingList)
router.post("/create-feedbacks", createFeedback)
router.get("/get-teachers", getTeachers)
router.get("/get-courses", getCourse)

module.exports = router