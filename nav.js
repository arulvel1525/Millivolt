const firebase = require("firebase/app");
require("firebase/database");

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmJwmU0EKpuJ0tnfCvhQweWOpFt5UrroU",
  authDomain: "millivolt2-361e7.firebaseapp.com",
  databaseURL: "https://millivolt2-361e7-default-rtdb.firebaseio.com",
  projectId: "millivolt2-361e7",
  storageBucket: "millivolt2-361e7.appspot.com",
  messagingSenderId: "531845236865",
  appId: "1:531845236865:web:4a32bbf49c13f733592580",
  measurementId: "G-C4CXMTRJLC"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function SelectData() {
  const dbRef = firebase.database().ref("Mechatronics/Voltage/Phase_1");

  dbRef.once("value")
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        console.log("Data from Firebase:", data);
      } else {
        console.log("No data found");
      }
    })
    .catch((error) => {
      console.error("Unsuccessful, error:", error);
    });
}

// Example: Call the SelectData function
SelectData();

  