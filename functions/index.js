const functions = require('firebase-functions');
const app = require('express')();

const {
  getAllScreams,
  postOneScream,
  getScream,
} = require('./handlers/screams');

const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser,
} = require('./handlers/users');

const FBAuth = require('./util/FBAuth');

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);

//TODO: Delete scream
//TODO: Like a scream
//TODO: unlike a scream
//TODO: Comment on apdb scream

// Users Routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/users/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
