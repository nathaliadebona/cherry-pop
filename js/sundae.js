const inputEl = document.querySelectorAll('#sundae-builder-area input');

inputEl.forEach((input) => {
    input.addEventListener('change', () => {

        const coneQuestion = document.querySelector('input[name="cone"]:checked');
        const flavorQuestion = document.querySelector('input[name="flavor"]:checked');
        const toppingQuestion = document.querySelectorAll('input[name="topping"]:checked');

        const coneValue = coneQuestion?.value || "not selected yet";
        const flavorValue = flavorQuestion?.value || "not selected yet";
        const toppingValues = Array.from(toppingQuestion).map((input) => {
            return input.value;
        });
        
    });
})