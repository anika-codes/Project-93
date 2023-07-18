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

user_name = localStorage.getItem("username");
roomname = localStorage.getItem("room_name");

function send_click(){
    msg = document.getElementById("message_input").value;
    
    firebase.database().ref(roomname).push({
        name: user_name,
        message: msg,
        likes: 0
    });
   document.getElementById("message_input").value = "";
}


function logout(){

    localStorage.removeItem("room_name");
    localStorage.removeItem("username");
    window.location.replace("index.html");

}