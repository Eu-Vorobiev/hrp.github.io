let form = document.querySelector(".form");
let formSuccess = document.querySelector(".form__success");

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
    },
    phone: {
      required: true,
      minLength: 2
    },
  },
  messages: {
    name: {
      required: `Вам необхідно ввести ім'я`,
      minLength: 'Введіть мінімум 2 символи'
    },
    phone: {
      required: `Будь ласка, введіть номер телефону або нік в Телеграмі`,
      minLength: 'Введіть мінімум 2 символи'
    },
  },

  submitHandler: function (form) {
    let xhr = new XMLHttpRequest();
    let formData = new FormData(form);

    xhr.open("POST", 'mail-spare.php', true);

    xhr.addEventListener("load", function () {
      if (xhr.readyState === 4) {
        switch (xhr.status) {
          case 200:
            console.log("YES");
            form.reset();
            successForm();
            break;
          case 404:
            console.log("NO");
            break;
          default:
            console.log("ERROR");
            break;
        };
      };
    });

    xhr.send(formData);
  },
});

function successForm() {
  formSuccess.classList.add("shown");
  form.classList.add("hidden");
}