const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = process.env.port || 3001;


app.use(morgan('dev'))


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/profile", (req, res) => {
    res.send("This is the profile page")
})

app.get("/profile/:id", (req, res) => {
    res.send(`This is the profile for: ${req.params.id}`)
});

app.post("/api/new", (req, res) => {
    res.json({
        id: 1,
        ...req.body
    });
})

app.get("/health", (req, res) => {
    res.json({
        success: true
    })
})

app.listen(PORT, () => {
    console.log(`App is listening on PORT:${PORT} 🚀`)
})

module.exports.app = {
    app
}