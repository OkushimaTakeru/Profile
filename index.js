//メニュー切り替え
const navSections = document.querySelectorAll("nav ul li");
const sectionContents = document.querySelectorAll(".section-content");

navSections.forEach((navSectionItem) => {
  navSectionItem.addEventListener("click", () => {
    navSections.forEach((navSectionItem) => {
      navSectionItem.classList.remove("selected");
    });

    navSectionItem.classList.add("selected");
    console.log(navSectionItem);
    sectionContents.forEach((sectionContent) => {
      sectionContent.classList.remove("selected");
    });

    document
      .getElementById(navSectionItem.dataset.id)
      .classList.add("selected");
  });
});

//モーダル表示
const button_close = document.getElementById("modal-close");
const button_opne = document.getElementById("Readmore-opne");
// const modal = document.getElementById("modalid2");
const modal = document.getElementById("modalid");
console.log(modal);
// const modal = document.querySelectorAll(".modal");
const section_portfoli_omodal = document.querySelectorAll(
  ".portfolio-item .portfolio-img p button"
);
const mask = document.que;

// ボタンがクリックされた時
button_opne.addEventListener("click", open);
function open() {
  modal.style.display = "block";
}

// バツがクリックされた時
button_close.addEventListener("click", close);
function close() {
  modal.style.display = "none";
}

//モーダル意外がクリックされた時
// document.addEventListener("click", (e) => {
//   console.log(e.target);
//   if (e.target == modal) {
//     modal.style.display = "none";
//   }
// });
