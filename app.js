require('dotenv').config()
const express = require('express');
const connectDB = require('./server/db/connect');
const userRouter = require('./server/routes/userRoute')
const app = express()

app.use(express.json())
app.use('/api/v1/foodapp', userRouter)

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