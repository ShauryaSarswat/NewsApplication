function showPopup(title) {
    const popup = document.querySelector(".popup");
    popup.style.display = "block";
    popup.querySelector("h2").innerText = title;
}

function closePopup() {
    const popup = document.querySelector(".popup");
    popup.style.display = "none";
}