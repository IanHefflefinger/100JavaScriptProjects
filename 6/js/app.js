// IIFE
(() => {
    const imgURLs = [
        'url("./img/contBcg-0.jpeg") center/cover fixed no-repeat',
        'url("./img/contBcg-1.jpeg") center/cover fixed no-repeat',
        'url("./img/contBcg-2.jpeg") center/cover fixed no-repeat',
        'url("./img/contBcg-3.jpeg") center/cover fixed no-repeat',
        'url("./img/contBcg-4.jpeg") center/cover fixed no-repeat'
    ];
    const letfBtn = document.querySelector('.btn-left');
    const rightBtn = document.querySelector('.btn-right');
    let count = 0;
    let imgContainer = document.querySelector('.img-container');

    const checkAndSet = () => {
        if (count >= imgURLs.length) {count = 0};
        if (count < 0) {count = imgURLs.length - 1};
        imgContainer.style.background = imgURLs[count];
    };

    letfBtn.addEventListener('click', () => {
        count--;
        checkAndSet();
    });
    rightBtn.addEventListener('click', () => {
        count++;
        checkAndSet();
    });

})();