
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXfofJ73BnvpZRCfH7oPCJLQD6IjH2Qfk",
  authDomain: "projeto-mundoinvertido-bd994.firebaseapp.com",
  projectId: "projeto-mundoinvertido-bd994",
  storageBucket: "projeto-mundoinvertido-bd994.appspot.com",
  messagingSenderId: "242784525177",
  appId: "1:242784525177:web:3aadf0178282e55d996da8",
  measurementId: "G-S0NVCPZGVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

  export default app;