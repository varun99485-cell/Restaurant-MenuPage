function filterMenu(category) {
    let items = document.getElementsByClassName("card");

    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";

        if (category === "all" || items[i].classList.contains(category)) {
            items[i].style.display = "block";
        }
    }
}
