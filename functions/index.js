const functions = require('firebase-functions');
const app = require('express')();

const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/users');
const FBAuth = require('./util/FBAuth');

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

// Users Routes
app.post('/signup', signup);
app.post('/login', login);

// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
