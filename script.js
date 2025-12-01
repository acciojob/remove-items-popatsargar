//your JS code here. If required.
document.getElementById("button").addEventListener("click", function () {
    const select = document.getElementById("colorSelect");

    
    if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
});
