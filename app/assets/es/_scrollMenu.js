/**
 * Нужно оптимизировать и создать код для скролла страницы
 * 1. Скролл по клику с изменением состояния пункта меню
 * 2. Скролл страницы с изменением состояния пункта меню
 */
document.addEventListener('DOMContentLoaded', () => {
  const allLinks = document.querySelectorAll('a[href^="#"');
  const firstMenuLink = document.querySelectorAll(`${prefix}-header ${prefix}-menu-list__link`)[0];
  const menuLine = document.querySelector(`${prefix}-header ${prefix}-menu__line`);
  const menuItem = document.querySelectorAll(`${prefix}-header ${prefix}-menu-list__item`);
  const menuLinks = document.querySelectorAll(`${prefix}-header ${prefix}-menu-list__link`);

  firstMenuLink.parentElement.classList.add(`${prefix.slice(1)}-menu-list__item--is-active`);
  menuLine.style.left = `${firstMenuLink.offsetLeft}px`;
  menuLine.style.maxWidth = `${firstMenuLink.offsetWidth}px`;

  allLinks.forEach((link) => {
    document.addEventListener('scroll', (e) => {
      e.preventDefault();

      const scrollDistance = window.scrollY;
      const allSections = document.querySelectorAll('section');

      allSections.forEach((block, idx) => {
        if (block.offsetTop - header.offsetHeight <= scrollDistance) {
          if (link.parentElement.classList.contains(`${prefix.slice(1)}-menu-list__item--is-scroll-active`)) {
            link.parentElement.classList.remove(`${prefix.slice(1)}-menu-list__item--is-scroll-active`);
          }

          menuLinks[idx + 1].parentElement.classList.add(`${prefix.slice(1)}-menu-list__item--is-scroll-active`);
          menuLine.style.left = `${menuLinks[idx + 1].offsetLeft}px`;
          menuLine.style.maxWidth = `${menuLinks[idx + 1].offsetWidth}px`;
        }
      });
    });
  });
});
/**
 * Надо раздробить код на функции
*/
