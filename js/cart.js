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
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cherry-pop-cart')) || [];
    const cartCount = document.getElementById('cart-count');

    cartCount.textContent = cart.length;
}

updateCartCount();



