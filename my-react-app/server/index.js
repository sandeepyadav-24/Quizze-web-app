import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";
const port = 3000;
import adminRouter from "./router/admin.js";

// USING CORS AS MiddleWare
app.use(cors());

// Middleware to parse JSON data
app.use(express.json());

// Admin
app.use("/admin", adminRouter);

///////////////***************** Establishment Connection ***************//////////////////
mongoose.connect(
  "mongodb+srv://sandeepyadav004343:f6AKgLnhPQd10pMf@cluster0.gduv40v.mongodb.net/"
);

//////////////////-----------------  ADMIN ROUTES ----------------///////////////

// PORT LISTEN
app.listen(port, () => {
  //Listen MEssage
  console.log(`port is just Started at ${port}`);
});
