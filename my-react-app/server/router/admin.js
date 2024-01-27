import jwt from "jsonwebtoken";
import express from "express";
import { User, Quiz } from "../db/db.js";
const router = express.Router();
// secret Key
const secretKey = "sec69";

// ADMIN Login Route
router.post("/login", async (req, res) => {
  // Getting Value From body
  const { email, password } = req.body;
  // Login data
  const loginData = {
    email: email,
    password: password,
  };

  // Finding loginData in dataBAse
  const user = await User.findOne({ email, password });
  //console.log(user);

  // if LoginData Found In DatabAse
  if (user) {
    // Getting userId From Backend
    const userId = user._id;
    console.log(userId);
    const objectIdNumber = parseInt(userId, 16);
    console.log(objectIdNumber);

    // Generating Token For Auth
    const token = jwt.sign(loginData, secretKey);
    // Response To Frontend;
    res.status(200).json({ mes: "Logged In Succefuuly ", token: token });
  } else {
    // Response t ofrontend
    res.status(401).json({ mes: "Invalid Email or password" });
  }
});

// ADMIN SIGNUP ROUTE
router.post("/signup", async (req, res) => {
  // EXtracting Cred From Body
  const { name, email, password } = req.body;

  //MAking Object Of Cred
  const obj = {
    name: name,
    email: email,
    password: password,
  };

  // Finding Admin for Existing USer
  const admin = await User.findOne({ email });

  // Getting Admin truely And Falsy VAlue
  if (admin) {
    // REsponse For Already Existing Admin
    res.status(200).json({ mes: "Already Signed Up" });
  } else {
    // Creating New Admin
    const newUser = new User(obj);
    // Save NEw Admin in DataBAse
    await newUser.save();

    // Response With Token
    res.status(200).json({ mes: "Successfully registered" });
  }
});

// ADMIN DAshBoard Route
router.get("/dashboard", (req, res) => {
  res.status(200).json({ mes: "DashBoard" });
});

// ADMIN CREATE QUIZ ROUTE
router.post("/createquiz", async (req, res) => {
  try {
    const {
      type,
      questions,
      createdBy,
      shareable,
      timerEnabled,
      maxQuestions,
    } = req.body;

    // Create quiz
    const quiz = await Quiz.create({
      type,
      questions,
      createdBy,
      shareable,
      timerEnabled,
      maxQuestions,
    });

    // Generate a link (you can customize this part based on your requirements)
    const quizLink = `https://yourwebsite.com/quiz/${quiz._id}`;

    res.status(201).json({ quizLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default router;
