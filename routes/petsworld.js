const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const bodyParser = require("body-parser");
const functions=require("../controllers/controller");
const transporter=require("../nodemailer/transporter");


//for getting data from encrypted sent data
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

//user routing pages
router.get("/", (req, res) => { res.render("users/index"); });
router.get("/Signin", (req, res) => { res.render("users/Signin"); });
//Routing for signup
router.get("/Signup", (req, res) => { res.render("users/Signup"); });
//TAking data from user
router.post("/Signup",functions.signup);
//code verification
router.post("/verifycode",functions.codeverification );
//Storing data to database
router.post("/RegisterUser",functions.register);

=======


//user routing pages
router.get("/", (req, res) => { res.render("users/index"); });
router.get("/Signin", (req, res) => { res.render("users/Signin"); });
router.get("/signup", (req, res) => { res.render("users/signup"); });
>>>>>>> d3a9e7f25d7f2dfad84611740962afc82cd63caa
router.get("/changerequest", (req, res) => { res.render("users/pswChangeRequest"); });
router.get("/changePassword", (req, res) => { res.render("users/changePassword"); });
router.get("/changePassword", (req, res) => { res.render("users/changePassword"); });
router.get("/Feedback", (req, res) => { res.render("users/Feedback"); });
router.get("/products", (req, res) => { res.render("users/products"); });
router.get("/productdetails", (req, res) => { res.render("users/productdetails"); });
router.get("/Billing", (req, res) => { res.render("users/Billing"); });
router.get("/Billing", (req, res) => { res.render("users/Billing"); });
//admin routing
router.get("/addproduct", (req, res) => { res.render("Admin/addproduct"); });
router.get("/adminpanel", (req, res) => { res.render("Admin/adminpanel"); });
router.get("/oders", (req, res) => { res.render("Admin/oders"); });
router.get("/Payments", (req, res) => { res.render("Admin/Payments"); });
router.get("/stock", (req, res) => { res.render("Admin/stock"); });
router.get("/userDetails", (req, res) => { res.render("Admin/userDetails"); });

<<<<<<< HEAD
=======








>>>>>>> d3a9e7f25d7f2dfad84611740962afc82cd63caa
module.exports = router;