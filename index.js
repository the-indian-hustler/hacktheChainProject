const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const multer = require("multer");
const path = require('path');
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { sendEmail } = require("./nodemail");

dotenv.config();

const app = express();
const port = process.env.PORT || 3013;

// MongoDB connection
mongoose.connect("mongodb+srv://sanidhyamadheshia:ZHyATJlgvFVgpJ2e@cluster0.oow7nwx.mongodb.net/college_dev?retryWrites=true&w=majority, { useNewUrlParser: true, useUnifiedTopology: true }")
    .then(() => console.log("DB CONNECTED >>>"))
    .catch(err => console.error(err));

// Multer configuration
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 }, // 1MB limit
    fileFilter: function(req, file, cb) {
        checkFileType(file, cb);
    }
}).single('photo');

function checkFileType(file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Images only!');
    }
}

// Express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('uploads'));

// Registration schema
const registrationSchema = new mongoose.Schema({
    email: String,
    _name: String,
    mobile: String,
    room: String,
    description: String,
    photo: String
});

const Registration = mongoose.model("Registration", registrationSchema);

// Register route
app.post("/register", async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            res.send(err);
        } else {
            if (req.file == undefined) {
                res.send('Error: No file selected!');
            } else {
                const newRegistration = new Registration({
                    email: req.body.email,
                    _name: req.body.name,
                    mobile: req.body.mobile,
                    room: req.body.room,
                    description: req.body.description,
                    photo: req.file.filename
                });

                try {
                    await newRegistration.save();
                    // sendEmail(req.body.name, req.body.mobile, req.body.room, req.body.description, req.file.filename);
                    console.log("email sent to sanidhyamadheshia@gmail.com");
                    res.send('File uploaded and data saved to MongoDB!');

                } catch (err) {
                    res.send(err);
                }
            }
        }
    });
});
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});