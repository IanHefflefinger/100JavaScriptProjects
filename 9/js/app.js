(() => {

  const storeItems = document.querySelectorAll('.store-item');
  const modal = document.querySelector('.lightbox-container');
  const modalPicture = document.querySelector('.lightbox-item');
  let x = document.querySelector('.lightbox-close');
  // console.log(modalPicture.style.background);

  storeItems.forEach(item => {
    item.addEventListener('click', () => {
      // imp!
      console.log(item.childNodes[1].childNodes[1].childNodes[1].src);
      // imp!
      modal.style.display = 'block';

      let testFile = item.childNodes[1].childNodes[1].childNodes[1].src;
      let re = /img.*/;
      let fileToUse = testFile.match(re)[0];
      console.log(fileToUse);
      let str = 'url("./' + fileToUse + '\") center/cover fixed no-repeat';
      console.log(str);
      modalPicture.style.background = str;

      x.addEventListener('click', () => {
        modal.style.display = 'none';
      });

    })
  });

})();