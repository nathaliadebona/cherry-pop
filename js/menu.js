const filterBtn = document.querySelectorAll('.filter-buttons button');
const productCards = document.querySelectorAll('.product-card');

filterBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const selectedCategory = button.textContent.toLowerCase();
        
        filterBtn.forEach((btn) => {
            btn.classList.remove('active');
        })
        
        button.classList.add('active');

        productCards.forEach((card) => {
            if (selectedCategory === "all" || card.dataset.category === selectedCategory) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
})