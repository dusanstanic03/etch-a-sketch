const container = document.querySelector("#container");
const btnChange = document.querySelector("#btnChange");
const btnClear = document.querySelector("#btnClear");

function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function makeGrid(dimension){
    container.innerHTML = '';
   
    const squareWidthHeight = 800 / dimension;
    for(let i = 1; i <= dimension * dimension; i++){
        const square = document.createElement("div");
        square.style.width = squareWidthHeight + "px";
        square.style.height = squareWidthHeight + "px";
        square.classList.add("square");

        square.setAttribute("data-darkness", "0");
    
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "darkgray";
            square.style.backgroundColor = getRandomColor();
            let darkness = parseInt(square.getAttribute("data-darkness")); // Get current darkness level

            if (darkness < 10){
                ++darkness;
                square.setAttribute("data-darkness", darkness); // Update darkness level

                // Reduce brightness by lowering RGB values
                square.style.filter = `brightness(${100 - darkness * 10}%)`;
            }
        });
    
        square.addEventListener("mouseleave", () => {
            // square.style.backgroundColor = "lightgray";
        });
    
        container.appendChild(square);
    }
}


for(let i = 1; i <= 256; i++){
    const square = document.createElement("div");
    square.classList.add("square");

    

    square.addEventListener("mouseenter", () => {
        // square.style.backgroundColor = "darkgray";
        square.style.backgroundColor = getRandomColor();
    });

    square.addEventListener("mouseleave", () => {
        // square.style.backgroundColor = "lightgray";
    });

    container.appendChild(square);
}

btnChange.addEventListener("click", () => {
    let dimension = prompt("Please enter the dimension");
    if(dimension <= 100){
        makeGrid(dimension);
    }else{    
        alert("You cannot enter a dimension bigger than 100");
    }
});

btnClear.addEventListener("click", () => {
    let elements = document.querySelectorAll(".square");
    elements.forEach(square => {
        square.style.backgroundColor = "lightgray";

        square.setAttribute("data-darkness", "0"); // Reset darkness level
        square.style.filter = "brightness(100%)"; // Reset brightnes
    
    });
   
});

