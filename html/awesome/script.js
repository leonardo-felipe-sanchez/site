const backgroundContainer = document.querySelector(".background-container");

const icons = [
    `<i class="fa-solid fa-wine-glass"></i>`,
    `<i class="fa-solid fa-wine-bottle"></i>`,
    `<i class="fa-solid fa-glass-water"></i>`,
    `<i class="fa-solid fa-glass-water-droplet"></i>`,
    `<i class="fa-solid fa-martini-glass"></i>`,
    `<i class="fa-solid fa-pizza-slice"></i>`,
    `<i class="fa-solid fa-burger"></i>`,
    `<i class="fa-solid fa-hotdog"></i>`,
    `<i class="fa-solid fa-cookie"></i>`,
    `<i class="fa-solid fa-cookie-bite"></i>`,
    `<i class="fa-solid fa-beer-mug-empty"></i>`,
    `<i class="fa-solid fa-beer-mug-full"></i>`,
    `<i class="fa-solid fa-utensils"></i>`,
    `<i class="fa-solid fa-fork"></i>`,
    `<i class="fa-solid fa-cheese"></i>`,
    `<i class="fa-solid fa-apple-whole"></i>`,
    `<i class="fa-solid fa-apple-bite"></i>`,
    `<i class="fa-solid fa-bread-slice"></i>`,
    `<i class="fa-solid fa-bread-loaf"></i>`,
    `<i class="fa-solid fa-bowl-food"></i>`,
    `<i class="fa-solid fa-ice-cream"></i>`,
    `<i class="fa-solid fa-mug-hot"></i>`,
    `<i class="fa-solid fa-mug-saucer"></i>`,
    `<i class="fa-solid fa-carrot"></i>`,
    `<i class="fa-solid fa-pepper-hot"></i>`,
    `<i class="fa-solid fa-drumstick-bite"></i>`,
    `<i class="fa-solid fa-drumstick"></i>`,
    `<i class="fa-solid fa-cake-candles"></i>`,
    `<i class="fa-solid fa-martini-glass-empty"></i>`,
    `<i class="fa-solid fa-champagne-glasses"></i>`,
    `<i class="fa-solid fa-shrimp"></i>`,
    `<i class="fa-solid fa-fish"></i>`,
    `<i class="fa-solid fa-bowl"></i>`,
    `<i class="fa-solid fa-plate-wheat"></i>`,
    `<i class="fa-solid fa-jug-detergent"></i>`,
    `<i class="fa-solid fa-bottle-droplet"></i>`,
    `<i class="fa-solid fa-egg"></i>`,
    `<i class="fa-solid fa-lemon"></i>`,
    `<i class="fa-solid fa-wheat-awn"></i>`,
    `<i class="fa-solid fa-bowl-rice"></i>`,
    `<i class="fa-solid fa-stroopwafel"></i>`,
    `<i class="fa-solid fa-candy-cane"></i>`,
    `<i class="fa-solid fa-birthday-cake"></i>`,
    `<i class="fa-solid fa-clipboard"></i>`
];

const iconInstances = [];
const maxAttempts = 200;
const numberOfIcons = 400;
let createdIcons = 0;


function createIcon() {
    if(createdIcons >= numberOfIcons) return;

    const iconElement = document.createElement("div");
    iconElement.classList.add("icon");

    const randomIndex = Math.floor(Math.random() * icons.length);
    iconElement.innerHTML = icons[randomIndex];

    const size = 13 + Math.random() * 9;
    iconElement.style.fontSize = `${size}px`;

    let attempts = 0;
    let placed = false;
    let x,y, angle;

    while (attempts < maxAttempts && !placed) {
         x = Math.random() * 100;
         y = Math.random() * 100;
         angle = Math.random() * 360;

        iconElement.style.left = `${x}vw`;
        iconElement.style.top = `${y}vh`;
        iconElement.style.transform = `rotate(${angle}deg)`;

        if (!checkCollision(iconElement, size)) {
            iconInstances.push({
                element: iconElement,
                x: x,
                y: y,
                size: size,
                angle: angle,
                moveDirection: Math.random() > 0.5 ? 1 : -1
            });
            backgroundContainer.appendChild(iconElement);
            placed = true;
            createdIcons++;
        }
        attempts++;

    }
    if (placed) {
        animateIcon(iconElement, x,y,angle)
    }


}

function checkCollision(newIcon, newSize) {
    const newRect = newIcon.getBoundingClientRect();


    for (const existingIcon of iconInstances) {
        const existingElement = existingIcon.element;
        const existingRect = existingElement.getBoundingClientRect();


        if (rectsCollide(newRect, existingRect, newSize, existingIcon.size))
            return true;
    }

    return false;
}


function rectsCollide(rect1, rect2, size1, size2) {
    const dx = rect1.left + rect1.width / 2 - (rect2.left + rect2.width / 2);
    const dy = rect1.top + rect1.height / 2 - (rect2.top + rect2.height / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    const minDistance = (size1 + size2) * 0.5;

    return distance < minDistance;
}

function animateIcon(icon, x,y, angle){
    const iconData = iconInstances.find(iconInstance => iconInstance.element === icon)

    const randomX = Math.random()* 1;
    const randomY = Math.random() *1;
    const randomRotate = (Math.random()-0.5)*10;
    let currentAngle = angle;


    function move(){
        x += randomX*0.01 * iconData.moveDirection ;
        y+= randomY *0.01;
        currentAngle += randomRotate;
        icon.style.left = `${x}vw`;
        icon.style.top = `${y}vh`;
        icon.style.transform = `rotate(${currentAngle}deg)`;
        requestAnimationFrame(move);


        if (x < 0 || x > 100 || y<0 || y>100) {
            const index = iconInstances.findIndex(iconInstance => iconInstance.element === icon)
            if(index !==-1) {
                iconInstances.splice(index,1)
                 icon.remove()
                createdIcons--;

            }


          createIcon()

        }
    }
    move()


}



function createBackground() {
    for (let i = 0; i < numberOfIcons; i++) {
        createIcon();
    }
}

createBackground();


window.addEventListener('resize', function () {
    backgroundContainer.innerHTML = ''
    iconInstances.length = 0
    createdIcons=0
    createBackground();
})