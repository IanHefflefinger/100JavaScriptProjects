const colors = ['red', 'orange', 'blue', 'green', 'yellow', 'purple'];

// let currentIteration = 0;
document.querySelector('button').addEventListener('click', () => {
    // if (currentIteration >= colors.length) {currentIteration = 0;};
    document.querySelector('body').style.backgroundColor = colors[Math.floor(Math.random() * Math.floor(colors.length))];
    // currentIteration++;
});