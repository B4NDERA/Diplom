const Sequelize = require("sequelize")
const db = require("../config/database.js")

const { DataTypes } = Sequelize

const feedbackSchema = db.define("feedbacks",{
    name: {
        type: DataTypes.STRING,
        required: true
    },
    surname: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    phone: {
        type: DataTypes.STRING,
        require: true
    },
    message: {
        type: DataTypes.STRING,
        require: true
    }
},{
    timestamp: true
})

module.exports = feedbackSchema
