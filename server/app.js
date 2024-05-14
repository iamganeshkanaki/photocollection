const express = require("express");
const app = express();
const cors = require("cors");
const port = 12345;
const multer = require('multer');
const mongoose = require('mongoose');
const fs = require('fs');
app.use(cors());
// Set up multer for handling file uploads
const upload = multer({ dest: 'uploads/' });
app.get("/", (req, res) => {
    res.send("hello world");
})

mongoose.connect('mongodb://localhost:27017/photos', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for storing image data
const ImageSchema = new mongoose.Schema({
    name: String,
    data: Buffer
});

const Image = mongoose.model('Image', ImageSchema);

app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        // Read the uploaded file
        const data = fs.readFileSync(req.file.path);

        // Create a new image document
        const image = new Image({
            name: req.file.originalname,
            data: data
        });

        // Save the image to MongoDB
        await image.save();

        // Remove the uploaded file
        fs.unlinkSync(req.file.path);

        res.status(201).send('Image uploaded successfully.');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error uploading image.');
    }
});

app.post("/photos", (req, res) => {
    Image.find().then((images) => {
        console.log(`Called@`);
        res.json({ images });
    }).catch((err) => {
        res.status(500).json({ error: err.message });
    });
});


app.listen((port), () => {
    console.log(`http://127.0.0.1:${port}`);
})