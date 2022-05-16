const checkboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  'input[type="checkbox"]'
);
let lastCheckbox: HTMLInputElement;

checkboxes.forEach((item) => item.addEventListener("click", handlerClick));

function handlerClick(this: HTMLInputElement, event: MouseEvent): void {
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
