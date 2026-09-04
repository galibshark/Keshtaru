// পেজ লোড হওয়ার সাথে সাথে ন্যাভবার টেনে আনবে
document.addEventListener("DOMContentLoaded", function() {
    
    // ন্যাভবার লোড করা
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
        });

});