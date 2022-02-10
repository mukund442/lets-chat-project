var firebaseConfig = {
    apiKey: "AIzaSyCfIiSmQhNC3TWxyPrdUPCLJ1fcgG12w5A",
    authDomain: "business-67cec.firebaseapp.com",
    databaseURL: "https://business-67cec-default-rtdb.firebaseio.com",
    projectId: "business-67cec",
    storageBucket: "business-67cec.appspot.com",
    messagingSenderId: "338754724469",
    appId: "1:338754724469:web:6f0ac1262044ed34ff8e3c",
    measurementId: "G-CX95WKCQ46"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"message"
    });
}