// পেজ লোড হওয়ার সাথে সাথে ন্যাভবার টেনে আনবে
document.addEventListener("DOMContentLoaded", function() {
    
    // ন্যাভবার লোড করা
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // ★ জাদুকরী সমাধান (Modal Fix) ★
            // পপ-আপটাকে ন্যাভবারের ভেতর থেকে বের করে সরাসরি body-তে পাঠিয়ে দিচ্ছি
            const authModal = document.getElementById('authModal');
            if (authModal) {
                document.body.appendChild(authModal);
            }

            // ন্যাভবার রেডি হওয়ার সিগন্যাল
            window.navbarIsReady = true; 
            document.dispatchEvent(new Event('NavbarLoaded'));
        });

});
