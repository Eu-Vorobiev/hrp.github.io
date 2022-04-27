document.addEventListener("DOMContentLoaded", function () {
  let anchors = document.querySelectorAll("#btn-cta");
  let faqBtn = document.querySelectorAll(".accordion__head");
  let languageBox = document.querySelectorAll(".language");
  let languageList = document.querySelector(".language__options");
  let languageArrow = document.querySelector(".language__arrow");

  languageBox.forEach(box => {
    box.addEventListener("click", function (e) {
      this.querySelector(".language__options").classList.toggle("active");
      this.querySelector(".language__arrow").classList.toggle("active");
    });
  });

  /*
  window.addEventListener("click", e => {
    const target = e.target;
    if (!target.closest(".language") && !target.closest(".language__options")) {
      languageList.classList.remove("active");
      languageArrow.classList.remove("active");
    }
  });
  */

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

  // Accordion
  for (let i = 0; i < faqBtn.length; i++) {
    faqBtn[i].addEventListener("click", function () {
      this.closest(".accordion__item").classList.toggle("active");
      this.children[1].classList.toggle("active");
      let faqInfo = this.nextElementSibling;
      if (faqInfo.style.maxHeight) {
        faqInfo.style.maxHeight = null;
        faqInfo.classList.remove("shown");
      } else {
        faqInfo.style.maxHeight = faqInfo.scrollHeight + "px";
        faqInfo.classList.add("shown");
      }
    });
  };
});