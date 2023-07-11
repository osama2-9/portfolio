let span = document.querySelector(".top");
window.onscroll = function () {
  if (this.scrollY >= 700) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let lis = document.querySelectorAll("#protfolio-nav  li");
lis.forEach((li) => {
  li.addEventListener("click", function (e) {
    lis.forEach((li) => {
      li.classList.remove("active-2");
    });

    e.currentTarget.classList.add("active-2");
  });
});

let testimonmials_btn = document.querySelectorAll(".testimonmials-btn ul li");

let user = document.querySelector("#username");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let bud = document.querySelector("#bud");
let card = document.querySelector(".card_2");
let card_2 = document.querySelector(".card_1");
let prot_li = document.querySelectorAll("#protfolio-nav li");
let input_warning = document.querySelector(".danger");

// testimonmials_btn.forEach((lis) => {
//     lis.addEventListener('click', function () {
//         testimonmials_btn.forEach((lis) => {
//             lis.classList.remove("active-3")
//         })
//         lis.classList.add("active-3")
//         card_2.classList.add("card_1_show")
//         card.style.left = "-150%"

//     })
// })

input_warning.addEventListener("click", function () {
  input_warning.style.display = "none";
});

//              Form Validation

document.forms[0].onsubmit = function (e) {
  usernameCheck();
  phoneCheck();
  budgetCheck();
  e.preventDefault();
};
function usernameCheck() {
  if (user.value !== "" && user.value.length <= 10) {
    user.style.border = "2px solid green";
  } else {
    user.style.border = "2px solid red";
    input_warning.style.display = "block";
  }
}
function phoneCheck() {
  if (phone.value.length == 10) {
    phone.style.border = "2px solid green";
  } else {
    phone.style.border = "2px solid red";
    input_warning.style.display = "block";
  }
}
function budgetCheck() {
  if (bud.value.length === 3 || bud.value.length === 4) {
    bud.style.border = "2px solid green";
  } else {
    bud.style.border = "2px solid red";
    input_warning.style.display = "block";
  }
}
