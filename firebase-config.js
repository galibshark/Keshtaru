// =========================================
// Firebase Central Configuration
// =========================================

// ফায়ারবেসের মেইন ফাংশনগুলো ইমপোর্ট করা
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// আপনার প্রজেক্টের API Keys
const firebaseConfig = {
    apiKey: "AIzaSyAiyQ8hO4YsTLMkN2z8bCuKMnq5xuCcGBY",
    authDomain: "keshtaru-8cf82.firebaseapp.com",
    projectId: "keshtaru-8cf82",
    storageBucket: "keshtaru-8cf82.firebasestorage.app",
    messagingSenderId: "933852183012",
    appId: "1:933852183012:web:615ddbfe64e5b0d9a2eff1",
    measurementId: "G-P14WTYC8QS"
};

// ফায়ারবেস চালু করা
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// অন্য পেজগুলো যেন এই ডেটাগুলো ব্যবহার করতে পারে, তাই export করে দিলাম
export { app, auth, db };