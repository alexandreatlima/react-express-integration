import express from "express"
import * as dotenv from "dotenv"
dotenv.config()
import cors from "cors"

const app = express()

import { dbConnect } from "./config/db.config.js"
dbConnect()

app.use(cors())
app.use(express.json())


import {petRouter} from "./routes/pet.routes.js"
app.use("/pet", petRouter)



app.listen(Number(process.env.PORT), () => {
    console.log(`Server up and running at port ${process.env.PORT}`)
})


