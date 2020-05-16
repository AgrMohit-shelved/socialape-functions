const admin = require('firebase-admin');
const serviceAccount = require('/home/agrmohit/temp-firebase-keys/socialape-by-agrmohit-1af8304c7641.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://socialape-by-agrmohit.firebaseio.com',
});

const db = admin.firestore();

module.exports = { admin, db };
