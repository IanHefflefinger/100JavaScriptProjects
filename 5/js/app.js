// IIFE because... why not
(() => {
    const counter = document.querySelector('#counter')
    const sub = document.querySelector('.prevBtn');
    const add = document.querySelector('.nextBtn');
    let count = 0;
    // check count and return color for counter number
    const checkCount = () => {
        return count > 0 ? 'green' :
            count < 0 ? 'red'
            : '#333333'
    }
    // sub from count
    sub.addEventListener('click', () => {
        count--;
        counter.textContent = count;
        console.log(checkCount());
        counter.style.color = checkCount();
    })
    // add to count
    add.addEventListener('click', () => {
        count++;
        counter.textContent = count;
        console.log(checkCount());
        counter.style.color = checkCount();
    })
})();