const functions = require('firebase-functions');
const app = require('express')();

const { getAllScreams, postOneScream } = require('./handlers/screams');
const {
  signup,
  login,
  uploadImage,
  addUserDetails,
} = require('./handlers/users');

const FBAuth = require('./util/FBAuth');

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.post('/user', FBAuth, addUserDetails);

// Users Routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/users/image', FBAuth, uploadImage);

// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
