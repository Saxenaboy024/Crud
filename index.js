const express = require('express')
const app = express()

app.use(express.json())
app.use("/employee",require("./controllers/api"))
const PORT = 3000;
app.listen(PORT,()=>console.log(`Server is running at ${PORT}`))
