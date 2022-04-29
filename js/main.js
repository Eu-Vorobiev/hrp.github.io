document.addEventListener("DOMContentLoaded", function () {
  let anchors = document.querySelectorAll("#btn-cta");
  let languageBox = document.querySelectorAll(".language");

  languageBox.forEach(box => {
    box.addEventListener("click", function (e) {
      this.querySelector(".language__options").classList.toggle("active");
      this.querySelector(".language__arrow").classList.toggle("active");
    });
  });

  for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  };

  let accItem = document.querySelectorAll('.accordion__item');
  let accHD = document.querySelectorAll('.accordion__head');

  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'faq__item accordion__item close';
    accItem[0].className = 'faq__item accordion__item open';
  }

  function toggleItem() {
    let itemClass = this.parentNode.className;
    if (itemClass == 'faq__item accordion__item close') {
      this.parentNode.className = 'faq__item accordion__item open';
    } else {
      this.parentNode.className = 'faq__item accordion__item close';
    }
  }
  for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem);
  }


  // FORM VALIDATION

  document.querySelector('#name').addEventListener('keyup', function () {
    this.value = this.value.replace(/[\d]/g, '');
  }, 'paste', function () {
    return false
  });
});