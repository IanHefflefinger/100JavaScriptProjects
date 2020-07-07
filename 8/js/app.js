(() => {

    const all = document.querySelector('[data-filter="all"]');
    const cakes = document.querySelector('[data-filter="cakes"]');
    const cupcakes = document.querySelector('[data-filter="cupcakes"]');
    const sweets = document.querySelector('[data-filter="sweets"]');
    const doughnuts = document.querySelector('[data-filter="doughnuts"]');
    const searchBar = document.querySelector('#search-item');
    let allItems = document.querySelectorAll('.store-item');

    // function to remove cards (items) from DOM - this will be used more than once
    hideItems = () => {
        allItems.forEach(item => {
            item.style.display = 'none';
        });
    };

    // filter by string
    searchBar.addEventListener('input', () => {
        allItems.forEach(item => {
            if (item.dataset.item.includes(searchBar.value.toLowerCase())) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // all filter
    all.addEventListener('click', () => {
        allItems.forEach(item => {
            item.style.display = 'block';
        });
    });
    // cakes filter
    cakes.addEventListener('click', () => {
        hideItems();
        allItems.forEach(item => {
            if (item.dataset.item === 'cakes') {
                item.style.display = 'block';
            }
        });
    });
    // cupcakes filter
    cupcakes.addEventListener('click', () => {
        hideItems();
        allItems.forEach(item => {
            if (item.dataset.item === 'cupcakes') {
                item.style.display = 'block';
            }
        });
    });
    // sweets filter
    sweets.addEventListener('click', () => {
        hideItems();
        allItems.forEach(item => {
            if (item.dataset.item === 'sweets') {
                item.style.display = 'block';
            }
        });
    });
    // doughnuts filter
    doughnuts.addEventListener('click', () => {
        hideItems();
        allItems.forEach(item => {
            if (item.dataset.item === 'dougnuts') {
                item.style.display = 'block';
            }
        });
    });
})();



