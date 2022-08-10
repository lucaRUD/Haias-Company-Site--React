const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const { VAR_STRING } = require("mysql/lib/protocol/constants/types");
const req = require("express/lib/request");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "haiascompany",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO form_data (first_name, last_name, email, phone_num, text) VALUES ('luca','cdd','awda','030303','nuuuuuu');";
  db.query(sqlInsert, (err, result) => {
    res.send("CEAU BROOOO");
  });
});
app.post("/api/insert", (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone_num = req.body.phone_num;
  const text = req.body.text;

  const sqlInsert =
    "INSERT INTO form_data (first_name, last_name, email, phone_num, text) VALUES (?,?,?,?,?); ";
  db.query(
    sqlInsert,
    [first_name, last_name, email, phone_num, text],
    (err, _result) => {
      console.log(err);
    }
  );
});

app.listen(3001, () => {
  console.log("running on port 3001");
});
