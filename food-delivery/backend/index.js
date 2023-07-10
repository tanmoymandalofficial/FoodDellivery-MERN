const mongoDB = require("./db")
const express = require('express')
const creatuser = require('./Routes/CreatUser')
const displayData = require('./Routes/DisplayData')


const app = express()
const port = 5000;

// mongoDB()

app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())

app.use('/api', creatuser)
app.use('/api', displayData)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// mongoDB()