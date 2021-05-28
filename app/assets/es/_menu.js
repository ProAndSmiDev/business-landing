document.addEventListener('DOMContentLoaded', () => {
  const clientSize = window.screen.width;

  if (clientSize >= 1024) {
    const menuLine = document.querySelector(`${prefix}-menu__line`);
    const menuItem = document.querySelectorAll(`header ${prefix}-menu-list__item`);

    for (let i = 0; i < menuItem.length; i++) {
      if (menuItem[i].classList.contains(`${prefix}-menu-list__item--is-active`)) {
        menuLine.style.width = `${menuItem[i].offsetWidth - 15}px`;
        menuLine.style.left = `${menuItem[i].offsetLeft}px`;
      } else {
        menuLine.style.width = `${menuItem[0].offsetWidth - 15}px`;
        menuLine.style.left = `${menuItem[0].offsetLeft}px`;
      }

      menuItem[i].addEventListener('mouseenter', () => {
        menuLine.style.width = (i !== menuItem.length - 1) ? `${menuItem[i].offsetWidth - 15}px` : `${menuItem[i].offsetWidth}px`;
        menuLine.style.left = `${menuItem[i].offsetLeft}px`;
      });

      menuItem[i].addEventListener('mouseleave', () => {
        menuLine.style.width = `${menuItem[0].offsetWidth - 15}px`;
        menuLine.style.left = '0';
      });
    }
  }
});
