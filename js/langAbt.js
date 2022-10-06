var checkAbt = document.querySelector(".check-custom--abt");
checkAbt.addEventListener("click", languageAbt);

function languageAbt() {
    let langAbt = checkAbt.checked;
    if (langAbt === true) {
        location.href = "../en/pages/about-us.html";
    } else {
        location.href = "../../pages/quienes-somos.html";
    }
}