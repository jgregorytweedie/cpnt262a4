const app = require("express");
const ejs = require("ejs");
const naturePhotos = require("./naturePhotos");
require("dotenv").config();
//requiring all the dependencies, and modules here^

// time to set my view engine!!!

app.request("view engine", "ejs");
// this here will render my static files with express.
app.request(express.static(path.join(__dirname, "public")));

// parsing requests
app.request(express.urlencoded({ extended: true }));

//this is my index page endpoint. 
// I tend to forget this: req, res means request and response. This is how computers talk to each other, sending requests and responses.
app.get("/", (req, res) => {
    res.render("pages/index",
    {
        title: "index",
        current: "page-index",
        tagline: "this is something, will change later."
    });
});

// Now index is done, let's do gallery.
app.get("/gallery", (req, res) => {
    res.render("pages/gallery",
    {
        title: "Gallery",
        current: "page-gallery",
        tagline: "Our favourite pictures of nature"
    });
});
// now, here is our subscribe endpoint.
app.get("/subscribe", (req, res) => {
    res.render("pages/subscribe",
    {
        title: "subscribe",
        current: "page-subscribe",
        tagline: "Subscribe here"
    });
}); 

// this will be my JSON endpoint.
app.get("/api/gallery", (req, res) => {
    res.json(nature);
});
app.post("/peoples", (req, res) => {
    res.send(`<p> Thank you, We will send you copies of our nature blogs to your email.</p>`);
}); 

// If anyone puts in a wrong endpoint, or if anything wrong happens, this code will show an error 404
app.use(function(req, res) {
    res.status(404);
    res.send("404: File not Found");
});

// I wanna set a PORT variable with the port 3000.
// definitely learned my mistake with making sure to capitalize PORT... hahahaaha....
const PORT = process.env.PORT || 3000;

// Listen on PORT and console.log PORT value
app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`);
});