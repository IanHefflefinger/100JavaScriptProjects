(() => {
    let submitButton = document.getElementById('submitBtn');
    let message = document.getElementById('message');
    let display = document.getElementsByClassName('message-content')[0];

    submitButton.addEventListener('click', (event) => {
        // prevents form from trashing data
        event.preventDefault();
        if (message.value === '') {
            document.getElementsByTagName('h5')[0].classList.add('show');
            setTimeout(() => { 
                document.getElementsByTagName('h5')[0].classList.remove('show');
            }, 3000);
        } else {
            display.innerText = message.value;
            message.value = '';
            document.getElementsByTagName('h5')[0].classList.remove('show');
        }
    })
})();

  
  