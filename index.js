const firebaseConfig = {
    apiKey: "AIzaSyAjX5ZFCsVuuwXCwYeelAm-otzN_RPkgSg",
    authDomain: "projects-88fd7.firebaseapp.com",
    projectId: "projects-88fd7",
    storageBucket: "projects-88fd7.appspot.com",
    messagingSenderId: "899927131329",
    appId: "1:899927131329:web:1648db50c99c4d32f28040"
};

document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})

firebase.initializeApp(firebaseConfig);
var database = firebase.database()
var auth = firebase.auth()


function login () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      alert('User Logged In!!')
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
      alert(error_code + error_message)
    })
}