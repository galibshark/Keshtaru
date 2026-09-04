// =========================================
// জাদুকরী কার্ট সিস্টেমের লজিক (Shared JS)
//=========================================

let shoppingCart = JSON.parse(localStorage.getItem('keshtaru_cart')) || [];

function saveCart() {
    localStorage.setItem('keshtaru_cart', JSON.stringify(shoppingCart));
    renderCart();
}

function convertToBanglaNumber(num) {
    return num.toString().replace(/\d/g, d => '০১২৩৪৫৬৭৮৯'[d]);
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    const badgeCount = document.getElementById('cart-badge-count');
    
    if (badgeCount) badgeCount.innerText = convertToBanglaNumber(shoppingCart.length);

    if (shoppingCart.length === 0) {
        if (container) {
            container.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <i class="bi bi-cart-x" style="font-size: 4rem;"></i>
                    <h5 class="mt-3 fw-bold">আপনার কার্ট একদম খালি!</h5>
                </div>`;
        }
        const totalPriceEl = document.getElementById('cart-total-price');
        if (totalPriceEl) totalPriceEl.innerText = '৳ ০';
        return;
    }

    let html = '';
    let total = 0;

    shoppingCart.forEach((item, index) => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;

        html += `
        <div class="cart-item">
            <img src="${item.image}" alt="Product">
            <div class="flex-grow-1">
                <h6 class="fw-bold mb-1" style="font-size: 0.95rem; color: #1f3629;">${item.name}</h6>
                <div class="text-success fw-bold mb-2">৳ ${convertToBanglaNumber(item.price)}</div>
                <div class="d-flex align-items-center gap-2">
                    <button class="cart-qty-btn" onclick="updateCartQty(${index}, -1)"><i class="bi bi-dash"></i></button>
                    <span class="fw-bold px-2 fs-5">${convertToBanglaNumber(item.qty)}</span>
                    <button class="cart-qty-btn" onclick="updateCartQty(${index}, 1)"><i class="bi bi-plus"></i></button>
                </div>
            </div>
            <div class="text-end d-flex flex-column justify-content-between">
                <i class="bi bi-trash3-fill cart-item-delete align-self-end" onclick="removeFromCart(${index})"></i>
                <div class="fw-bold mt-3 text-dark">৳ ${convertToBanglaNumber(itemTotal)}</div>
            </div>
        </div>`;
    });

    if (container) container.innerHTML = html;
    const totalPriceEl = document.getElementById('cart-total-price');
    if (totalPriceEl) totalPriceEl.innerText = `৳ ${convertToBanglaNumber(total)}`;
}

window.updateCartQty = function(index, change) {
    shoppingCart[index].qty += change;
    if (shoppingCart[index].qty < 1) shoppingCart[index].qty = 1;
    saveCart();
}

window.removeFromCart = function(index) {
    shoppingCart.splice(index, 1);
    saveCart();
}

window.toggleMagicCart = function() {
    document.getElementById('magic-cart-overlay').classList.toggle('active');
}

window.closeCartOnOverlay = function(e) {
    if (e.target.id === 'magic-cart-overlay') { toggleMagicCart(); }
}

window.goToCheckout = function() {
    if(shoppingCart.length === 0) { alert("আপনার কার্ট খালি!"); return; }
    window.location.href = "checkout.html";
}

// পেজ লোড হলেই কার্ট আপডেট করবে
document.addEventListener('DOMContentLoaded', renderCart);

// ★ নতুন ম্যাজিক: অন্য পেজে কার্ট আপডেট হলে এই পেজেও সাথে সাথে আপডেট হবে! ★
window.addEventListener('storage', function(e) {
    if(e.key === 'keshtaru_cart') {
        shoppingCart = JSON.parse(e.newValue) || [];
        renderCart();
    }
});
