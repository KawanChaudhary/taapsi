const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user')
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const orderRoute = require("./routes/order")
const cartRoute = require("./routes/cart")
const stripeRoute = require("./routes/stripe")
const path = require('path');
var cors = require('cors')

dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => console.log("DB connection Succesfull!")).catch((err) => {
    console.log(err)
});

// Cors Middleware
app.use(cors())

// End Points

app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log("backend running")
})


// sever production

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join("client/build")));
    app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "client", "build", "index.html")));
}