const firebaseConfig = {
  apiKey: "AIzaSyB0_cd8UgFHH3cj9qMPZN--dIjAlnGQyi4",
  authDomain: "neochat-a2ec1.firebaseapp.com",
  databaseURL: "https://neochat-a2ec1-default-rtdb.firebaseio.com",
  projectId: "neochat-a2ec1",
  storageBucket: "neochat-a2ec1.appspot.com",
  messagingSenderId: "136827168912",
  appId: "1:136827168912:web:0e171e0bfe1c548609d015",
  measurementId: "G-CQ0QTP7L3Q",
  };
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.href = "chat.html"
    var uid = user.uid;
  } else {
  }
});