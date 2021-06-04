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
  menuLine.style.width = `${firstMenuLink.offsetWidth}px`;

  allLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      let linkHref = link.getAttribute('href').slice(1);
      const topOffset = (isFixedHeader || isStickyHeader) ? header.offsetHeight : 0;
      const linkTarget = (linkHref) ? document.getElementById(linkHref) : null;
      const linkTargetPos = (linkTarget) ? linkTarget.offsetTop : null;
      const linkScrollOffset = (linkTargetPos) ? linkTargetPos - topOffset : null;

      if (link.classList.contains(`${prefix.slice(1)}-menu-list__link`)) {
        menuItem.forEach((linkItem) => {
          if (linkItem.classList.contains(`${prefix.slice(1)}-menu-list__item--is-active`)) {
            linkItem.classList.remove(`${prefix.slice(1)}-menu-list__item--is-active`);
          }
        });

        link.parentElement.classList.add(`${prefix.slice(1)}-menu-list__item--is-active`);

        menuLine.style.left = `${link.offsetLeft}px`;
        menuLine.style.width = `${link.offsetWidth}px`;
      }

      window.scrollTo({
        top: linkScrollOffset || 0,
        behavior: 'smooth',
      });
    });
  });

  document.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    const allSections = document.querySelectorAll('section');

    allSections.forEach((block, idx) => {
      if (block.offsetTop - header.offsetHeight <= scrollDistance) {
        menuLinks.forEach((link) => {
          if (link.parentElement.classList.contains(`${prefix.slice(1)}-menu-list__item--is-active`)) {
            link.parentElement.classList.remove(`${prefix.slice(1)}-menu-list__item--is-active`);
          }
        });

        menuLinks[idx+1].parentElement.classList.add(`${prefix.slice(1)}-menu-list__item--is-active`);
        menuLine.style.left = `${menuLinks[idx+1].offsetLeft}px`;
        menuLine.style.width = `${menuLinks[idx+1].offsetWidth}px`;
      }
    });
  });
});
/**
 * Надо раздробить код на функции
*/
