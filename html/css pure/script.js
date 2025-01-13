document.addEventListener('DOMContentLoaded', () => {
    const bubblesContainer = document.querySelector('.bubbles');
    const bubbleImageURL = "https://pbs.twimg.com/media/F22qQfGXsAAJbpF.jpg"; // Your image URL
    const numberOfBubbles = 64; // Adjust the number of bubbles as needed

    for (let i = 0; i < numberOfBubbles; i++) {
        const bubble = document.createElement('img');
        bubble.src = bubbleImageURL;
        bubble.style.setProperty('--i', i + 1);
        
        const randomX = Math.random() * 100; // Random horizontal position in percentage
        bubble.style.left = `${randomX}%`;

          // Determine even/odd for the color and shadow
          if (i % 2 === 0) {
            bubble.style.boxShadow = "0 0 0 10px #4fc3dc44, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc";
        } else {
            bubble.style.boxShadow = "0 0 0 10px #ff2d7544, 0 0 50px #ff2d75, 0 0 100px #ff2d75";
        }


        bubble.style.animationDuration = `${125 / (i + 1)}s`;


        bubblesContainer.appendChild(bubble);

        // Optional: Add initial random position to prevent them from starting at the same position
        const randomStartY = Math.random() * 100;
        bubble.style.transform = `translateY(${randomStartY}vh)`;
    }
});