import firebase from "firebase";
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBzclEoUyUSLyECLhlA05rqdqFtWCtx6cw",
    authDomain: "react-blog-app-33378.firebaseapp.com",
    databaseURL : "https://react-blog-app-33378-default-rtdb.firebaseio.com",
    projectId: "react-blog-app-33378",
    storageBucket: "react-blog-app-33378.appspot.com",
    messagingSenderId: "682276223659",
    appId: "1:682276223659:web:402a7283d840831c9355ee"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const database = firebase.database();
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

 export {database as default , googleAuthProvider , firebase}

//  database.ref().set({
//    title : "blog title 2",
//    description: "blog description 2",
//    auth : {
//     name:"Furkan",
//     surname:"Erbağcı"
//    }
//  }).then(()=>{
//     console.log("kayıt eklendi")
//  }).catch((e)=>{
//     console.log("Hata" , e)
//  })
// database.ref().once("value").then((snapshot)=>{
//     const blog = snapshot.val();
//     console.log(blog)
// }).catch((e)=>{
//    console.log(e)
// })
//  database.ref().set({
//     title : "blog title 1"
//     }
//   )


// database.ref("title").set(
//      "blog title changed"
    
//   )

//   database.ref("auth/name").set(
//     "ilayda"
   
//  )
