
import express from "express";

const app = express();
const port = 4021;
// uses static method to access non dynamic files (css,images and all files that are not changing)
app.use(express.static("public"));

// below is rendering ejs files
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/myPortfolio", (req,res)=>{
  res.render("myPortfolio.ejs")
})

app.get("/services", (req,res)=>{
  res.render("service.ejs")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
