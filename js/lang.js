var check = document.querySelector(".check-custom");
check.addEventListener("click", language);

function language() {
  let lang = check.checked;
  if (lang === true) {
    location.href = "en/index.html";
  } else {
    location.href = "../index.html";
  }
}
