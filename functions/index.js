const functions = require('firebase-functions');
const admin = require('firebase-admin');
const firebase = require('firebase');
const app = require('express')();
admin.initializeApp();

const firebaseConfig = {
  apiKey: 'AIzaSyDJDXOTvkoRflSMjchZGj3neTn2oXXZeOU',
  authDomain: 'socialape-by-agrmohit.firebaseapp.com',
  databaseURL: 'https://socialape-by-agrmohit.firebaseio.com',
  projectId: 'socialape-by-agrmohit',
  storageBucket: 'socialape-by-agrmohit.appspot.com',
  messagingSenderId: '547764004286',
  appId: '1:547764004286:web:640ce7ae7678314cd205ef',
  measurementId: 'G-ENRSEP22DD',
};

firebase.initializeApp(firebaseConfig);
const db = admin.firestore();

app.get('/screams', (req, res) => {
  db.collection('screams')
    .orderBy('createdAt', 'desc')
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) =>
        screams.push({
          screamId: doc.id,
          body: doc.data().body,
          userhandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
        }),
      );
      return res.json(screams);
    })
    .catch((err) => console.error(err));
});

app.post('/scream', (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString(),
  };

  db.collection('screams')
    .add(newScream)
    .then((doc) =>
      res.json({ message: `document ${doc.id} created successfully` }),
    )
    .catch((err) => {
      res.status(500).json({ message: 'something went wrong', error: err });
      console.error(err);
    });
});

// Signup Route
app.post('/signup', (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  //TODO: validate user
  let token, userId;
  db.doc(`users/${newUser.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({ handle: 'This hande is already taken' });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((_token) => {
      token = _token;
      const userCreadentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId: userId,
      };
      return db.doc(`users/${newUser.handle}`).set(userCreadentials);
    })
    .then(() => res.status(201).json({ token }))
    .catch((err) => {
      console.error(err);
      if (err.code === 'auth/email-already-in-use') {
        return res.status(400).json({ email: 'Email is already registered' });
      } else {
        return res.status(500).json({ error: err.code });
      }
    });
});

// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
