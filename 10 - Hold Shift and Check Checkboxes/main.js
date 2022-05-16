"use strict";
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastCheckbox;
checkboxes.forEach((item) => item.addEventListener("click", handlerClick));
function handlerClick(event) {
    let isBitween = false;
    if (event.shiftKey && this.checked) {
        checkboxes.forEach((item) => {
            if (item === lastCheckbox || item === this) {
                isBitween = !isBitween;
            }
            if (isBitween) {
                item.checked = true;
            }
        });
    }
    lastCheckbox = this;
}
