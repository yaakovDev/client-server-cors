const express = require("express");
const cors = require('cors')
const app = express()

var corsOptions = {
  origin: ['http://localhost:5500','http://127.0.0.1:5500'],
  methods: ['GET','PUT', 'POST'],
  credentials: true
}
 
//app.use(cors());//cors enabled for all origins
app.use(cors(corsOptions));


app.get("/data", (req,res) => { 
  res.json({name:'jacob',state:'israel'})
})

app.listen(3000)