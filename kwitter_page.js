var firebaseConfig = {
    apiKey: "AIzaSyBxhN5whshg6N9CdcB9BvsLvR1gWsGYUqw",
    authDomain: "class-test-81d6d.firebaseapp.com",
    databaseURL: "https://class-test-81d6d.firebaseio.com",
    projectId: "class-test-81d6d",
    storageBucket: "class-test-81d6d.appspot.com",
    messagingSenderId: "76465595814",
    appId: "1:76465595814:web:50205ecd3abcde4f215b67"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         //Start code
         
//End code
      } });  }); }
getData();

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
    }

