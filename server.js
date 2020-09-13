const express = require("express");
const mg = require("mongoose");
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/html-routes")(app);

mg.connect(process.env.MONGODB_URI || "mongodb://localhost/travelimages", {
    userNewUrlParser: true
});

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
})