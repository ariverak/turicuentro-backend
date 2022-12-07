import express from 'express'
import routes from './src/routes'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
