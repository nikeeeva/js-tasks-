// const leftButton = document.querySelector('#left');
const leftButton = document.getElementById('left');
// const rightButton = document.querySelector("#right");
const rightButton = document.getElementById("right");
const items = document.querySelector("#items");
const computedStyles = getComputedStyle(items);



rightButton.addEventListener("click", e => {
    e.preventDefault();
    let currentRight = parseInt(computedStyles.right)


    if (currentRight < 500) {
        items.style.right = `${currentRight + 100}px`;
    }
    
});


leftButton.addEventListener("click", e => {
   e.preventDefault();
   let currentRight = parseInt(computedStyles.right)

   if (currentRight > 0) {
    items.style.right = `${currentRight - 100}px`;
}

});

