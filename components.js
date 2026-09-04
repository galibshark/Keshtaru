document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-placeholder').innerHTML = data;
            
            // ম্যাজিক: ন্যাভবার পুরোপুরি লোড হওয়ার পর পুরো ওয়েবসাইটকে একটি সিগন্যাল দেওয়া হবে
            document.dispatchEvent(new Event('NavbarLoaded'));
        });
});
