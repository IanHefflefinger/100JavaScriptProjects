const possibleValues = 'ABCDEF0123456789';
document.querySelector('a').addEventListener('click', () => {
    // reset color
    hexColor = '#';
    // choose 6 random letters and numbers and add
    for (let i = 0; i < 6; i++) {
        let randomVal = Math.floor(Math.random() * Math.floor(possibleValues.length));
        hexColor += possibleValues[randomVal];
    }
    // set background color
    document.querySelector('body').style.backgroundColor = hexColor;
    // set text to color
    document.getElementById('hex-value').innerText = hexColor;
});