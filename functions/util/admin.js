const admin = require('firebase-admin');

// TODO: Comment following 5 lines when deploying
// ----------------------------------------------
const serviceAccount = require('/home/agrmohit/temp-firebase-keys/socialape-by-agrmohit-1af8304c7641.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://socialape-by-agrmohit.firebaseio.com',
});

// TODO: Comment following line when serving cloud functions locally
// -----------------------------------------------------------------
// admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };
