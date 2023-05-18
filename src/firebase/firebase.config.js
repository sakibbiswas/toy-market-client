// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: "AIzaSyCDLbYIBvxA5ng-sVtGRR6hDxNceNie7YM",
    // authDomain: "toy-marketplace-client-d8225.firebaseapp.com",
    // projectId: "toy-marketplace-client-d8225",
    // storageBucket: "toy-marketplace-client-d8225.appspot.com",
    // messagingSenderId: "97909139443",
    // appId: "1:97909139443:web:2b07341c3fdfaaf1715486"
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);