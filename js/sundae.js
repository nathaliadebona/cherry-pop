const inputEl = document.querySelectorAll('#sundae-builder-area input');
const sundaePreview = document.getElementById('sundae-preview');

const coneNames = {
    "waffle-cone": "Waffle Cone",
    "cup": "Cup"
};

const flavorNames = {
    "vanilla": "Vanilla",
    "chocolate": "Chocolate",
    "strawberry": "Strawberry"
};

const toppingNames = {
    "cherry": "Cherry",
    "sprinkles": "Sprinkles",
    "chocolate-syrup": "Chocolate Syrup"
}

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
        
        const toppingsText = toppingValues.join(", ") || "no toppings";
    
        const coneDisplay = coneNames[coneValue] || "not selected yet";
        const flavorDisplay = flavorNames[flavorValue] || "not selected yet";
        const toppingDisplay = toppingValues.map((value) => {
            return toppingNames[value];
        });
        
        const toppingDisplayText = toppingDisplay.join(", ") || "no toppings";
        console.log(JSON.stringify(toppingDisplayText));
        sundaePreview.textContent = `Your Sundae: ${coneDisplay} with ${flavorDisplay} flavor, topped with ${toppingDisplay}`;
    });
})