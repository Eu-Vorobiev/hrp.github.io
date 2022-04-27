let form = document.querySelector(".form");
let formSuccess = document.querySelector(".form__success");
// const validation = new JustValidate(".form");

// validation
//   .addField("#name", [
//     {
//       rule: "required",
//       errorMessage: `Вам необхідно ввести ім'я`,
//     },
//     {
//       rule: "minLength",
//       value: 2,
//       errorMessage: 'Введіть мінімум 2 символи',
//     },
//     {
//       rule: 'customRegexp',
//       value: /[a-z]{1,20}/,
//       errorMessage: "Ви можете ввести тільки літери",
//     },
//   ])
//   .addField("#phone", [
//     {
//       rule: "required",
//       errorMessage: `Будь ласка, введіть номер телефону або нік в Телеграмі`,
//     },
//     {
//       rule: "minLenght",
//       errorMessage:'Введіть мінімум 2 символи',
//     },

//   ]);

new JustValidate('.form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      // customRegexp: /[a-z]{1,20}/,
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

    xhr.open("POST", 'mail.php', true);

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
  // setInterval(() => {
  //   formSuccess.classList.remove("shown");
  //   form.classList.remove("hidden");
  // }, 5000);
}