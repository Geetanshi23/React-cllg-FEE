var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./db_con.js');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(session({ secret: "test1234@!" }));
app.get('/', (req, res) => {
    res.send("Hello welcome to restapi");
});

app.post('/signup_user', (req, res) => {
    const userData = req.body;
    const currentDateTime = new Date().toISOString().slice(0, 19).replace("T", " ");
    const insertQuery = `INSERT INTO user (name, email, password, dob, dor, datetime) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [
        userData.name,
        userData.email,
        userData.password,
        userData.dob,
        userData.dor,
        currentDateTime
    ];

    db.query(insertQuery, values, function (err, result) {
        if (err) {
            console.error(err);
            return res.status(500).send({ msg: "Error inserting data into the database" });
        }
        console.log(result);
        res.send({ msg: "Data inserted successfully" });
    });
});

app.post('/login_user', (req, res) => {
  const loginData = req.body;
  const selectQuery = `SELECT * FROM user WHERE email = ? AND password = ?`;
  const values = [loginData.email, loginData.password];
  db.query(selectQuery, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ msg: "Error during login" });
    }
    if (result.length > 0) {
      res.send({ msg: "Login successful", redirectTo: "/" });
    } else {
      res.send({ msg: "Invalid credentials" });
    }
  });
});


app.listen(8000, () => console.log("server running at port no 8000"));
