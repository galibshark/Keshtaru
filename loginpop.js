// =========================================
// Authentication & Navbar Profile Logic
// =========================================

import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { auth } from './firebase-config.js';

let isUserLoggedIn = false;

// ন্যাভবারের লগইন ও প্রোফাইলের সব লজিক একটি ফাংশনে রাখা হলো
function setupNavbarLogic() {
    const profileBtn = document.getElementById('profile-btn');
    
    // ইউজার লগইন চেক ও প্রোফাইল আইকন সবুজ করা
    onAuthStateChanged(auth, (user) => {
        isUserLoggedIn = !!user; 
        if (user) {
            if(profileBtn) profileBtn.classList.add('text-success', 'fw-bold');
        } else {
            if(profileBtn) profileBtn.classList.remove('text-success', 'fw-bold');
        }
    });

    // প্রোফাইল বাটনে ক্লিক করলে কী হবে
    if(profileBtn) {
        profileBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (isUserLoggedIn) { 
                window.location.href = "dashboard.html"; 
            } else { 
                var authModal = new bootstrap.Modal(document.getElementById('authModal')); 
                authModal.show(); 
            }
        });
    }

    // লগইন ফর্ম সাবমিট
    const loginForm = document.getElementById('modal-login-form');
    if(loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('modal-login-btn');
            btn.innerHTML = "লগইন হচ্ছে... ⏳";
            const email = document.getElementById('modal-login-email').value;
            const password = document.getElementById('modal-login-password').value;

            signInWithEmailAndPassword(auth, email, password)
                .then(() => { location.reload(); }) 
                .catch(() => { alert("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে!"); btn.innerHTML = "লগইন"; });
        });
    }

    // রেজিস্ট্রেশন ফর্ম সাবমিট
    const regForm = document.getElementById('modal-register-form');
    if(regForm) {
        regForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = document.getElementById('modal-reg-btn');
            btn.innerHTML = "অ্যাকাউন্ট তৈরি হচ্ছে... ⏳";
            const name = document.getElementById('modal-reg-name').value;
            const email = document.getElementById('modal-reg-email').value;
            const password = document.getElementById('modal-reg-password').value;

            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    updateProfile(userCredential.user, { displayName: name }).then(() => { location.reload(); });
                })
                .catch((error) => { alert("সমস্যা হয়েছে: " + error.message); btn.innerHTML = "অ্যাকাউন্ট খুলুন"; });
        });
    }
}

// রেস-কন্ডিশন ফিক্স: আগে চেক করবে ন্যাভবার লোড হয়েছে কি না
if (window.navbarIsReady) {
    setupNavbarLogic();
} else {
    document.addEventListener('NavbarLoaded', setupNavbarLogic);
}



// পপ-আপ বন্ধ হওয়ার পর আটকে থাকা কালো স্ক্রিন বা ফ্রিজ হয়ে যাওয়া ফিক্স করার কোড
document.addEventListener('click', function(e) {
    // যদি ক্লোজ বাটন (X) অথবা পপ-আপের বাইরের কালো অংশে ক্লিক করা হয়
    if (e.target.classList.contains('btn-close') || e.target.classList.contains('modal')) {
        setTimeout(() => {
            // পেজে যদি কোনো ফালতু ব্যাকড্রপ বা স্টাইল আটকে থাকে, তা মুছে ফেলবে
            const backdrops = document.querySelectorAll('.modal-backdrop');
            backdrops.forEach(b => b.remove());
            document.body.classList.remove('modal-open');
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }, 300);
    }
});
