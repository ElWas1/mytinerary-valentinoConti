// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBymB5bTRU4XWnDD3p0dOIHPmh0go1iZ4M",
    authDomain: "mytinerary-ccfea.firebaseapp.com",
    projectId: "mytinerary-ccfea",
    storageBucket: "mytinerary-ccfea.appspot.com",
    messagingSenderId: "630040356972",
    appId: "1:630040356972:web:81b86071bd7ec932065049",
    measurementId: "G-Q6SYP6BQTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)

const tools = { app, analytics, storage }

export { app, analytics, storage }