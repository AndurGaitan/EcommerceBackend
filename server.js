import * as dotenv from 'dotenv' 
dotenv.config()
import "./src/database/connect.js"
import express from 'express'
import authRouter from "./src/routes/auth.route.js"
const app = express()

app.use(express.json())
app.use("/api/", authRouter);

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> {
    console.log('Servidor conectado en el puerto' + PORT)
})