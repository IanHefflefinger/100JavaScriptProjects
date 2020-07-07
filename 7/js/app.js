(() => {
    // customer objects
    const customers = [
        {
            name: 'Ian',
            testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis lacus vitae pharetra luctus. Nam sed hendrerit libero. Maecenas augue libero, tincidunt sit amet ex tincidunt, mollis dictum sem. Mauris congue aliquam mi. Maecenas dignissim nulla id erat pellentesque, varius aliquet risus maximus. Donec eu felis nulla. Integer dolor magna, rhoncus vel tortor nec, vulputate semper orci. Morbi interdum, tellus eget venenatis rutrum, urna justo mattis nisi, vehicula viverra metus metus quis massa. Sed consequat, ipsum ut eleifend vehicula, velit mauris sodales elit, eget sodales velit odio eget quam.',
            image: "img/customer-0.jpg"
        },
        {
            name: 'Max',
            testimonial: 'Donec eu sapien vitae dui pharetra aliquet non vitae elit. Sed eu eros ut elit aliquet condimentum nec a tellus. Suspendisse vel accumsan lectus. Morbi dictum posuere eros, sed porta elit pretium tempus. Maecenas vulputate nulla ac eros venenatis porttitor. In in massa quam. Proin quis tortor massa. Donec volutpat eget magna sit amet tristique. Maecenas vulputate lorem neque, non porta nisl lobortis et. Vivamus vel elementum lectus. Aliquam aliquam diam erat, fringilla tempus ligula porttitor non. Proin sed cursus sapien. Maecenas mollis tellus eget odio consectetur consectetur. Phasellus lorem mi, lacinia ut magna a, imperdiet molestie metus. Nunc tempor pharetra vestibulum. Nullam nec rhoncus eros.',
            image: "img/customer-1.jpg"
        },
        {
            name: 'Todd',
            testimonial: 'Duis rhoncus vel nisi eu viverra. Sed gravida risus felis, at dictum risus mollis eu. Integer tincidunt iaculis eros, sed accumsan purus varius pellentesque. Nulla semper eros ut ante varius tincidunt. Morbi lectus elit, tristique vel tortor non, scelerisque volutpat ligula. Praesent imperdiet quis nulla id sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed imperdiet tempor neque, et efficitur nulla pharetra quis. Nam egestas mollis posuere. Sed faucibus, nisl ac suscipit suscipit, urna mi vestibulum nulla, in eleifend eros mauris eget neque.',
            image: "img/customer-2.jpg"
        },
        {
            name: 'Mike',
            testimonial: 'Nulla in leo nisl. Pellentesque convallis ac enim in auctor. Nullam pretium pharetra nisi ut maximus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus eu nunc ut sapien auctor ultrices et eu diam. Pellentesque metus lectus, ultrices in enim ut, laoreet hendrerit lacus. Vivamus convallis porttitor ligula, sit amet convallis tortor iaculis vel. Vivamus porta eros in massa dapibus, nec ullamcorper diam lacinia. Fusce aliquam sed metus quis congue. Cras sed enim blandit, sodales risus ac, suscipit libero. Donec pharetra, nibh quis ullamcorper semper, nibh orci accumsan dui, nec placerat nibh neque vitae enim.',
            image: "img/customer-3.jpg"
        },
        {
            name: 'Mark',
            testimonial: 'Maecenas nec libero a massa ornare elementum vel aliquam erat. Vivamus efficitur eros vel ligula consectetur, quis pellentesque risus rhoncus. Cras mollis vitae justo eget ullamcorper. Nulla consequat luctus nisl, sed eleifend lectus accumsan nec. In vitae convallis diam. Ut viverra mattis purus sed ultrices. Nunc pharetra urna at mi aliquet, quis sollicitudin lorem viverra. Etiam vel odio porttitor, lobortis massa non, tempus lacus. Maecenas tristique urna nunc, dictum commodo leo euismod ut. Proin enim erat, fermentum eget ornare nec, lacinia at tellus. Quisque porttitor eros enim, id maximus lectus aliquam nec. Curabitur iaculis, purus quis fermentum pharetra, mi diam varius augue, vel porta metus diam non elit. Pellentesque ultricies in neque at lacinia. Quisque maximus eros vel nunc tincidunt, non facilisis erat rutrum. Vivamus ultrices interdum mi quis varius. Cras augue elit, gravida dignissim tellus sit amet, consectetur eleifend nibh.',
            image: "img/customer-4.jpg"
        }
    ];
    // set values
    const custImg = document.querySelector('img');
    const custTest = document.querySelector('#customer-text');
    const custName = document.querySelector('#customer-name');
    let count = 0;

    // set buttons
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');

    // resets index to keep in range (0 - the length *-1)
    resetIndex = () => {
        count > customers.length - 1 ? count = 0 :
        count < 0 ? count = customers.length - 1 :
        count = count;
    };
    // function to set values for variables
    setValues = () => {
        resetIndex();
        custImg.src = customers[count].image;
        custTest.textContent = customers[count].testimonial;
        custName.textContent = customers[count].name;
    };
    setValues();

    // BUTTON LOGIC
    // back
    prevBtn.addEventListener('click', () => {
        count--;
        setValues();
    });
    // forward
    nextBtn.addEventListener('click', () => {
        count++;
        setValues();
    });
})();