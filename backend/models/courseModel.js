const Sequelize = require("sequelize")
const db = require("../config/database.js")

const { DataTypes } = Sequelize

const courseSchema = db.define("courses",{
    name: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
   
},{
    timestamp: true
})

module.exports = courseSchema