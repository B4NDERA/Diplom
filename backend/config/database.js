const Sequelize = require("sequelize")

const db = new Sequelize("build_pc", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3307
})

module.exports = db