const Sequelize = require("sequelize")
const db = require("../config/database.js")

const { DataTypes } = Sequelize


const userSchema = db.define("users",{
    login: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
   
},{
    timestamp: true
})

module.exports = userSchema
