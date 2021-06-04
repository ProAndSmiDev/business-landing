/**
 * Нужно оптимизировать и создать код для скролла страницы
 * 1. Скролл по клику с изменением состояния пункта меню
 * 2. Скролл страницы с изменением состояния пункта меню
 */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      let linkHref = link.getAttribute('href').slice(1);
      const topOffset = (isFixedHeader || isStickyHeader) ? header.offsetHeight : 0;
      const linkTarget = (linkHref) ? document.getElementById(linkHref) : null;
      const linkTargetPos = (linkTarget) ? linkTarget.offsetTop : null;
      const linkScrollOffset = (linkTargetPos) ? linkTargetPos - topOffset : null;

      const scrollOptions = {
        top: linkScrollOffset || 0,
        behavior: 'smooth',
      };

      if (link.classList.contains(`${prefix.slice(1)}-menu-list__link`)) {
        const menuItem = document.querySelectorAll(`${prefix}-header ${prefix}-menu-list__item`);

        menuItem.forEach((linkItem) => {
          if (linkItem.classList.contains(`${prefix.slice(1)}-menu-list__item--is-active`)) {
            linkItem.classList.remove(`${prefix.slice(1)}-menu-list__item--is-active`);
          }
        });

        link.parentElement.classList.add(`${prefix.slice(1)}-menu-list__item--is-active`);
      }

      window.scrollTo(scrollOptions);
    });
  });
});
