// Cart state
let cart = JSON.parse(localStorage.getItem('jetha_cart')) || [];

// Update cart count UI
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('jetha_cart', JSON.stringify(cart));
    updateCartCount();
}

// Add to cart function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();

    // Simple feedback
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-8 right-8 bg-primary text-white px-6 py-3 rounded-none shadow-2xl z-[60] transition-transform animate-bounce';
    toast.textContent = `Added ${product.name} to cart!`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// Mobile menu toggle (simple version)
const mobileMenuBtn = document.querySelector('button.md\\:hidden');
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        // This would ideally open a side menu or drawer
        alert('Mobile menu feature coming soon!');
    });
}
