const express = require("express")
const app = express()

const dotenv = require("dotenv")

const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const adminRoutes = require("./routes/adminRoutes")

const cors = require("cors")

const databaseConnect = require("./config/database")

dotenv.config({
  path : "backend/config/config.env"
})


app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
app.use("/api/build-pc", adminRoutes)


try {
  databaseConnect.authenticate()
  console.log("Database connected...")
} catch (error) {
  console.error("Connection error:", error)
}



const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})