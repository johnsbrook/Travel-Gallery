const express = require("express");
const db = require("../models");
const path = require("path");

const router = express.Router();

router.get("/api/images", (req, res) => {
    db.Images.find({})
        .then( (cb) => {
            res.json(cb)
        })
        .catch( err => {
            res.status(400).json(err)
        });
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;