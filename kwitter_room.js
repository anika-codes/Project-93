var firebaseConfig = {
    apiKey: "AIzaSyDJXaJKuh0XWgwWaFYjMdj4Pn2o3kqkFII",
    authDomain: "kwitter-86a9d.firebaseapp.com",
    databaseURL: "https://kwitter-86a9d-default-rtdb.firebaseio.com",
    projectId: "kwitter-86a9d",
    storageBucket: "kwitter-86a9d.appspot.com",
    messagingSenderId: "557420439633",
    appId: "1:557420439633:web:27de8b59d983c549acb070"
  };
  

  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username =  localStorage.getItem("username");

document.getElementById("user_name").innerHTML = "Welcome " + username;


function add_room(){
    var room_name =   document.getElementById("add_room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose : "created new room"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_chat_page.html";
      
}
function getData(){
  firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML ="";
  snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  //Start code
     console.log("Room Name " + room_name);
                  room_row = "<div class = 'my_rooms' id = "+Room_names+" onclick = 'redirect_room(this.id)' > #" + Room_names  +"</div>";
                  document.getElementById("trending_room_box").innerHTML += room_row;
  //End code
});});}

getData();

function redirect_room(name_room){
  console.log("Room clicked is "+ name_room);
  localStorage.setItem("room_name", name_room);

  window.location = "kwitter_chat_page.html";


}

function log_out(){
  localStorage.removeItem("room_name");
  locaclStorage.removeItem("username");
  window.location = "index.html";
}