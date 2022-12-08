import express from 'express'
import morgan from "morgan";
import 'dotenv/config'
import routes from './src/routes'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(morgan("dev"));
app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
