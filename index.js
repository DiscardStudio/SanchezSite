var fs = require('fs');
var http = require('http');
var https = require('https');
var cors = require('cors');
var privateKey  = process.env.privateKey;
var certificate = process.env.certificate;

var credentials = {key: privateKey, cert: certificate};
var express = require('express');
var app = express();
require('dotenv').config();
const { Pool } = require('pg')
// pools will use environment variables
// for connection information
const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

const path = require("path");
/*
    create table users (
    email varchar(32) primary key,
    first_name varchar(32) not null,
    last_name varchar(32) not null,
    profile_picture bytea
    );
    
    create table auth (
    email varchar(32) primary key,
    passhash varchar(32) not null
    );
    
    create table sessions (
    email varchar(32) primary key,
    first_name varchar(32) not null,
    last_name varchar(32) not null,
    timeslot time not null,
    game varchar(4) not null
    );
    
    create table interests (
    email varchar(32) primary key,
    games text[] not null
    );

with ua as (
    select users.email, users.first_name, users.last_name, auth.passhash
    from users inner join auth on (users.email=auth.email)
), iss as (
    select sessions.email, sessions.games, sessions.first_name, sessions.last_name, sessions.timeslot
    from sessions full outer join interests on (sessions.email=interests.email)
)
select iss.email, iss.first_name, iss.last_name, iss.timeslot, ua.passhash, iss.games
from iss inner join ua on(ua.email=iss.email)
*/

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8000);
httpsServer.listen(8443);
const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './front/build')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './front/build', 'index.html'));
});

app.post('/signup', (req, res) => {
    pool.query(`select email from auth on where email=${req.query.email}`, 
        (err, result) => {
        if (result && result.rows && result.rows.length > 0) {
            res.sendStatus(500);
            return console.error('User already exists');
        }
        pool.query(`insert into auth(email,passhash) values(${req.query.email},${req.query.passhash}); insert into users(email, first_name, last_name) values (${req.query.email},${req.query.first_name},${req.query.last_name})`, 
            (err, result) => {
            if (err) {
                res.sendStatus(403);
                return console.error('Error executing query', err.stack);
            }
            res.sendStatus(200);
        });
    });
});
var Mailer = require('nodemailer');

var transporter = Mailer.createTransport({
    service: "smtp",
    host: "playhoboken.com",
    port: 465,

    auth: {
    user: "noreply@playhoboken.com", 
    pass: process.env.NRPASSWORD,   
    },
});

app.post('/create-session', (req, res) => {
    pool.query(`insert into sessions(email, first_name, last_name, timeslot, game) values (${req.query.email},${req.query.first_name},${req.query.last_name},${new Date(date.getTime() + (-300)*60*1000)},${req.query.game})`, 
        (err, result) => {
        if (result && result.rows && result.rows.length > 0) {
            res.sendStatus(403);
            return console.error('Session already exists');
        }
        pool.query(`
            select users.email, users.first_name
            from users, interests
            where users.email=interests.email and `, 
            (err, result2) => {
            if (err) {
                res.sendStatus(403);
                return console.error('Error');
            }
        });
    });
    for(var x=0;x<result.rows.length; x++) {
        var mailOptions = {
            from: 'noreply@playhoboken.com',
            to: result.rows[x].email,
            subject: `${req.query.first_name} is playing one of your favorite games!`,
            text: `Dear ${result2.rows[x].first_name},\n Come by today right now to play your favorite game with ${req.query.first_name}!\n\n Note: This is an automated message, please direct any questions you have to https://playhoboken.com`
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
});

app.get('/find-session', (req, res) => {
    pool.query(`select first_name, last_name, timeslot, game
                from sessions`, 
        (err, result) => {
        if (err) {
            res.sendStatus(403);
            return console.error('Error finding sessions');
        }
        if (result.rows.length > 0) {
            res.json({rows:result.rows});
            return console.write("Sent Sessions");
        }
        res.sendStatus(404);
        return console.write("No Sessions Found");
        
    });
});

app.get('/login', (req,res) => {
    pool.query(`select users.email, users.first_name, users.last_name, auth.passhash
    from users inner join auth on (users.email=auth.email)
    where users.email=${req.query.email} and auth.passhash=${req.query.passhash}`, 
        (err, result) => {
        if (err) {
            res.sendStatus(404);
            return console.error('Error executing query', err.stack);
        }
        res.json(result.rows[0]);
    });
});

app.get('/user', (req,res) => {
    pool.query(`select email, first_name, last_name
    from users
    where email=${req.query.email}`, 
        (err, result) => {
        if (err) {
            res.sendStatus(404);
            return console.error('Error executing query', err.stack);
        }
        res.json(result.rows[0]);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});