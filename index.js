const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
corsOptions = {
  origin: "https://blog-app-frontend-roan.vercel.app",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());


app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);
mongoose.connect(process.env.MONGODB_STRING);

mongoose.connection.once("open", () => {
  console.log("Now Connected to MongoDB Atlas");
});

if (require.main === module) {
  app.listen(4000, () => console.log(`Server running at port ${4000}`));
}

module.exports = { app, mongoose };
