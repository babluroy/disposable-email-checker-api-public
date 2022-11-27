require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 2000;

//routes 
const validateEmail = require("./routes/validate-email")

// middlewares
app.use(bodyParser.json());
app.use(cors());

// routes
app.use("/api", validateEmail)

app.listen(port , () => {
    console.log(`app is running at ${port}`)
})


