document.querySelectorAll(".load-image").forEach((item) => {
  item.addEventListener("click", (event) => {
    const href = event.target.getAttribute("href");
    event.preventDefault();
    const newImage = document.createElement("img");
    newImage.setAttribute("src", href);
    document.body.insertBefore(newImage, event.target);
    event.target.remove();
  });
});