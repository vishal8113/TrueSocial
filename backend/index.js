require("dotenv").config()

const express  = require("express")


const {createServer} = require("http")  
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const helmet = require("helmet")
const cors = require("cors")
const rateLimit = require("express-rate-limit")
const otpRoutes =require("./Routes/otpRoutes");
app.use('/api/otp',otpRoutes);

const server = createServer(app)

const PORT = process.env.PORT || 3000

const routes = require("./Routes/index")

const dbConnect = require("./Config/dbConfig")

app.use(helmet())
app.use(cors())

app.use(express.json({limit:"50mb"}))

app.use(
    express.urlencoded({
      extended: true,
      limit: "50mb",
      parameterLimit: 10000000,
    })
)

app.use("/api/v1",routes)

const limiter = rateLimit({
    max: 2000,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP, please try again in an hour",
});

app.use("/truesocial",limiter)

app.get("/health",(req,res) => {
    res.status(200).json({status:"ok"})
})

dbConnect()

server.listen(PORT,() => {
    console.log(`Server is started at port ${PORT}`)
})