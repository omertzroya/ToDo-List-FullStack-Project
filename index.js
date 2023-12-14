import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

import dotenv from 'dotenv';
dotenv.config();


const app = express();
const port = 3000;


// database connection 
const db = new pg.Client({
  user:process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: {
    rejectUnauthorized: false, 
  },
});
db.connect();

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Option 2" },
  { id: 2, title: "Option 1" },
];

// routes for the app 
app.get("/", async (req, res) => {
try {
    const result = await db.query("SELECT * FROM items ORDER BY id ASC");
    items = result.rows;

  res.render("index.ejs", {
    listTitle: "To Do List",
    listItems: items,
  });
} catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
try {
    await db.query("INSERT INTO items (title) VALUES ($1)", [item]);
  res.redirect("/");
} catch (err) {
    console.log(err);
  }
});

app.post("/edit", async (req, res) => {
  const item = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  try {
    await db.query("UPDATE items SET title = ($1) WHERE id = $2", [item, id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

app.post("/delete", async (req, res) => {
  const id = req.body.deleteItemId;
  try {
    await db.query("DELETE FROM items WHERE id = $1", [id]);
    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

// server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
