
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAYEP2XwFnr9Vx2Am9bJKNwuPb2h6b06G4",
      authDomain: "qwitterrugved.firebaseapp.com",
      databaseURL: "https://qwitterrugved-default-rtdb.firebaseio.com",
      projectId: "qwitterrugved",
      storageBucket: "qwitterrugved.appspot.com",
      messagingSenderId: "564266000486",
      appId: "1:564266000486:web:6d4bd456183c3f09ca8da7"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout (){
      window.location ="index.html";
}

