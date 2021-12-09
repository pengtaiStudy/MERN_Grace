const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")

dotenv.config();
app.use(express.json());

/*
After Mongoose 6 release, those options are not supported, provided as default

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useCreateIndex : true,
}).then(console.log("Connected to MongoDB.")).catch((err)=> console.log(err));
*/
mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB."))
    .catch((err)=> console.log(err));
/*
app.use("/", (req, res) => {
    console.log("test");
});
*/

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen("3000", () => {
    console.log("Backend is running");
});