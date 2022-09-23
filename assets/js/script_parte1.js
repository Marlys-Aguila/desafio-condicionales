let image = document.querySelector("img");

image.addEventListener("click", () => {
    if (image.style.border === "") {
        image.style.border = "2px red solid";
    } else {
        image.style.border = "";
    }
});
