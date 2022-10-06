var check = document.querySelector(".check-custom");
check.addEventListener("click", language);

function language() {
  let lang = check.checked;
  if (lang === true) {
    location.href = "en/";
  } else {
    location.href = "../";
  }
}
