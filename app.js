require('dotenv').config()
require('express-async-errors')
const cors = require('cors')
const express = require('express');
const connectDB = require('./server/db/connect');
const userRouter = require('./server/routes/userRoute')
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api/v1/foodapp', userRouter)

app.use('*', (req, res)=> {
  res.status(404).json({msg: 'Resource or route not found'})
})

app.use((err, req, res, next)=> {
  res.status(400).json({status: 'Failed',msg: `Internal error - ${err}`})
})

const port = process.env.PORT || 3001;
const url = process.env.MONGO_URI

const start = async () => {
  try {
    await connectDB(url)
    app.listen(port, ()=> {
      console.log(`Server is listening on port ${port}`);
    })
    
  } catch (error) {
    console.log(error);
  }
}

start()