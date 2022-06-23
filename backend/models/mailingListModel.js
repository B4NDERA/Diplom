const Sequelize = require("sequelize")
const db = require("../config/database.js")

const { DataTypes } = Sequelize

const mailingListSchema = db.define("mailings",{
    email: {
        type: DataTypes.STRING,
        required: true
    },
   
},{
    timestamp: true
})

module.exports = mailingListSchema