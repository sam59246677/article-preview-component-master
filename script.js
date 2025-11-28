const shareBtn = document.getElementById("shareBtn");
const sharePopup = document.getElementById("sharePopup");

shareBtn.addEventListener("click", () => {
  sharePopup.style.display =
    sharePopup.style.display === "block" ? "none" : "block";
});
