// Initialize Firebase
var config = {
    apiKey: "AIzaSyAO-yxP2KBdThPjA-yIpCemXyRLkV-DdBY",
    authDomain: "mycontact-c134a.firebaseapp.com",
    databaseURL: "https://mycontact-c134a.firebaseio.com",
    projectId: "mycontact-c134a",
    storageBucket: "mycontact-c134a.appspot.com",
    messagingSenderId: "233197051264"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
 
  var firstName = "";
  var secondName = "";
  var email = "";
  var message = "";

  $("#submit").on("click", function(event){
    event.preventDefault();

    firstName = $("#firstName").val();
    secondName = $("#lastName").val();
    email = $("#email").val();
    message = $("#message").val();

    database.ref().push({

      firstName: firstName,
      secondName: secondName,
      email: email,
      message: message,
      dateAdded: firebase.database.ServerValue.TIMESTAMP

    });

    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#message").val("");
  })
  

 