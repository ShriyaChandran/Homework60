 import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD_VpxQbh0Elo1SZanN7sjDorsrkzyJjqM",
    authDomain: "schoolatt-9f831.firebaseapp.com",
    databaseURL: "https://schoolatt-9f831-default-rtdb.firebaseio.com",
    projectId: "schoolatt-9f831",
    storageBucket: "schoolatt-9f831.appspot.com",
    messagingSenderId: "28720596515",
    appId: "1:28720596515:web:4f07051093ab51d3015396"
  };


  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

   export default firebase.database()

console.log(firebase.name);
console.log(firebase.database());
 
 

  