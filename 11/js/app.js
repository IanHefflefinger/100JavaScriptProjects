(() => {

    let calcBtn = document.querySelector('.submitBtn');

    calcBtn.addEventListener('click', (event) => {
        // prevent form refresh
        event.preventDefault();

        let billAmount = document.getElementById('input-bill').value;
        let people = document.getElementById('input-users').value;

        console.log(billAmount);
        console.log(people);

        
    });

})();