const foods = document.querySelectorAll(".food");
const selection = document.querySelector(".selection");
var text = [];
var textMore = "";

foods.forEach(e => e.addEventListener("input", () => {
    if (e.id === "check-all") {
        if (e.checked === true) {
            foods.forEach(e => {
                if (e.id !== "check-all" && e.checked === false) {
                    e.checked = true;
                    text.push(" " + e.labels[0].textContent);
                };
            });
        } else {
            foods.forEach(e => {
                if (e.id !== "check-all" && e.checked == true) {
                    e.checked = false;
                    text.splice(text.indexOf(" " + e.labels[0].textContent), 1);
                };
            });
        };
    } else {
        if (e.checked === true) {
            text.push(" " + e.labels[0].textContent);
        } else {
            foods[0].checked = false;
            text.splice(text.indexOf(" " + e.labels[0].textContent), 1);
        };
    };
    if (text.length === 0) {
        selection.textContent = "Please, select your food";
    } else if (text.length >= 1 && text.length <= 2) {
        selection.textContent = text;
    } else {
        if (text.length > 3) {
            foods[0].checked = true;
        };
        i = text.length - 2;
        textMore = " and " + i + " more";
        selection.textContent = text[0] + "," + text[1] + textMore;
    };
}));