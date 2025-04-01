import express from "express"
import morgan from "morgan"
import router from "./routes/userRoutes"
const PORT = 3000
const app = express()
app.use(morgan('common'))

app.listen(PORT, () => {
    console.log("Opened server on port ", PORT)
})

app.get("/", (req, res) => {
    res.send({"msg": "teste"})
})
app.use(router)