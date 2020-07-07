// IIFE  * this project will be made to work with perfect user input FIRST bus removed later 
(() => {
    
    // BUTTONS ON CALCULATOR
    // 0 1 2 3 4 5 6 7 8 9 . + - / * 
    const numbersAndOperators = document.querySelectorAll('[data-num]');
    // console.log(numbersAndOperators);
    // equals
    const equals = document.querySelector('.btn-equal');
    // console.log(equals);
    // clear button
    const clear = document.querySelector('.btn-clear');
    // console.log(clear);

    // SCREEN ON CALCULATOR
    const calcScreen = document.querySelector('.screen');

    // put vals here
    let evalMe = '';

    // REMOVE LEADING CHARACTERS *must start with num OR .
    // let testStr = '.34567890*';
    // let testStr2 = '*34567890';

    // let rgx = /^[0-9.]/;

    // console.log(testStr.match(rgx));
    // console.log(testStr2.match(rgx));

    // numsOnly = () => {
    //     if (!evalMe.match(rgx)) {
    //         evalMe = '';
    //     }
    // }
    // numsOnly();


    // CAPTURE VALUE ON CALCULATOR INPUT - FIXME
    // calcScreen.addEventListener('input', () => {
    //     console.log(calcScreen.value);
    // });

    // CAPTURE NUMBER OR OPERATOR
    numbersAndOperators.forEach((elem) => {
        const numOrOp = elem.dataset.num;
        elem.addEventListener('click', () => {
            // console.log(numOrOp);
            evalMe += numOrOp;
            // console.log(evalMe);
            calcScreen.value = evalMe;
        });
    });

    // EVENT LISTENER ON EQUALS BUTTON
    equals.addEventListener('click', () => {
        // console.log(equals);
        evalMe = eval(evalMe);
        calcScreen.value = evalMe;
        // calcScreen.value = eval(evalMe);
    });

    // EVENT LISTENER ON CLEAR BUTTON
    clear.addEventListener('click', () => {
        // console.log(clear);
        evalMe = '';
        calcScreen.value = '';
    });


})();