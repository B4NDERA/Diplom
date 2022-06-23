const Sequelize = require("sequelize")
const db = require("../config/database.js")

const { DataTypes } = Sequelize

const teachersSchema = db.define("teachers",{
    name: {
        type: DataTypes.STRING,
        required: true
    },
    surname: {
        type: DataTypes.STRING,
        required: true
    },
    position: {
        type: DataTypes.STRING,
        required: true
    },
    quote: {
        type: DataTypes.STRING,
        require: true
    }
},{
    timestamp: true
})

module.exports = teachersSchema
