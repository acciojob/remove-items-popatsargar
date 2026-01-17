const button = document.querySelector('input[type="button"]');
const select = document.getElementById("colorSelect");

button.addEventListener("click", function () {
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
});
