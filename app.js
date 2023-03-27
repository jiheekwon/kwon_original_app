const express = require("express");
const app = express();
const knex = require("./db/knex");
const cors = require("cors");
// const { Client } = require("pg");
// const client = new Client({
//   user: "postgres",
//   host: "db",
//   database: "postgres",
//   password: "postgres",
//   port: 5432
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

// client.connect();

app.get("/", async (_, res) => {
  await knex("post")
  .select("*")
  .then((result) => {
    return res.send(result);
  });
});

app.post("/create", async (req, res) => {
  const postTitle = req.body.title;
  const postContent = req.body.content;
  // await knex("post").insert({title: postTitle, content: postContent, study_date: postDate}).then(console.log("DB inset OK"));
  // client.query("insert into post (title, content, study_date) values ($1, $2, $3)", [postTitle, postContent, postDate]);
  await knex("post").insert({title: postTitle, content: postContent});
  return res.send("ok");
});

app.get("/edit/:id", async (req, res) => {
  const editId = req.params.id;
  await knex("post")
    .select("*")
    .where({id: editId})
    .then((result) => {
      console.log(result);
      res.render("edit.ejs", {post: result[0]});
    });
  // client.query(`select * from post where id=${req.params.id}`, (_, result) => {
  //   res.render("edit.ejs", {post: result.rows[0]});
  // });
});

app.post("/edit/:id", async(req, res) => {
  const editId = req.params.id;
  const editTitle = req.body.title;
  const editContent = req.body.content;
  const editDate = req.body.study_date;
  await knex("post")
    .where({id: editId})
    .update({title: editTitle, content: editContent, study_date: editDate})
    .then(res.redirect("/"));
  // client.query("update post set title=$1, content=$2, study_date=$3 where id=$4", [editTitle, editContent, editDate, editId]);
  // res.redirect("/");
});

app.listen(8000);