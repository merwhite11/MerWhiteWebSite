const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
// const mongoDB = require('../database/mongoDB.js');
const session = require('express-session');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const localStrategy		= require('passport-local').Strategy;
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));