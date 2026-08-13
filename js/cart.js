const cartButtons = document.querySelectorAll('.add-to-cart');

cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.dataset.product;
        const productPrice = parseFloat(button.dataset.price);
        console.log(productName, productPrice)

        const cart = JSON.parse(localStorage.getItem('cherry-pop-cart')) || [];

        cart.push({
            name: productName,
            price: productPrice
        });

        localStorage.setItem('cherry-pop-cart', JSON.stringify(cart)); 
        
        updateCartCount();
    });
})

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cherry-pop-cart')) || [];
    const cartCount = document.getElementById('cart-count');

    cartCount.textContent = cart.length;
}

updateCartCount();

// CART PAGE // 
const cart = JSON.parse(localStorage.getItem('cherry-pop-cart')) || [];
const emptyCartMsg = document.getElementById('empty-cart-message');
const cartItems = document.getElementById('cart-items');

if (emptyCartMsg) {
    if (cart.length === 0) {
        emptyCartMsg.style.display = "block";
        cartItems.style.display = "none";
    } else {
        emptyCartMsg.style.display = "none";
        cartItems.style.display = "block";

        cart.forEach((item) => {
            const li = document.createElement('li');

            li.textContent = `${item.name} - $${item.price}`;

            cartItems.appendChild(li);
        });
    }}




