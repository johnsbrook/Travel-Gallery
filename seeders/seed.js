const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/imageperformance", {
  useNewUrlParser: true
});

const imgDenSeed = [
    {
        description: "Valley at Rocky Mountain National Park",
        image: "public/assets/images/denver/1.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Mountain peak at Rocky Mountain National Park",
        image: "public/assets/images/denver/2.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Scenary at Rocky Mountain National Park",
        image: "public/assets/images/denver/3.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Forest at Rocky Mountain National Park",
        image: "public/assets/images/denver/4.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Valley with Mountains in the Background at Rocky Mountain National Park",
        image: "public/assets/images/denver/5.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Curving Road at Rocky Mountain National Park",
        image: "public/assets/images/denver/6.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Capitol Building in Denver",
        image: "public/assets/images/denver/7.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Modern Architecture in Denver",
        image: "public/assets/images/denver/8.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Modern Architecture in Denver",
        image: "public/assets/images/denver/9.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Bunny Hiding in an Urban Park in Denver",
        image: "public/assets/images/denver/10.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Urban Park in Denver",
        image: "public/assets/images/denver/11.jpg",
        date: new Date(Date.now())
    },
    {
        description: "Pedestrian Bridge over River in Denver",
        image: "public/assets/images/denver/12.jpg",
        date: new Date(Date.now())
    }
]