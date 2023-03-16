const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
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
