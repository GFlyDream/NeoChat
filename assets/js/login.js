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
var database = firebase.database();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    location.href = "chat.html"
    var uid = user.uid;
  }
});

var googleProvider = new firebase.auth.GoogleAuthProvider();
// İnit Firebase

function loginUser(){
firebase.auth().signInWithPopup(googleProvider).then(function(result) {
          // This gives you a GitHub Access Token. You can use it to access the GitHub API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user)
   location.href="chat.html"
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          if (errorCode === 'auth/account-exists-with-different-credential') {
            alert('You have already signed up with a different auth provider for that email.');
            // If you are using multiple auth providers on your app you should handle linking
            // the user's accounts here.
          } else {
            console.error(error);
          }
        });
}
function logoutUser(){
   firebase.auth().signOut()
   .then(function() {
      location.href="login.html";
   }, function(error) {
      alert("Signout process failed! Please report this issue.")
   });
}