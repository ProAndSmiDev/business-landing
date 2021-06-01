document.addEventListener('DOMContentLoaded', () => {
  const clientSize = window.screen.width;
  const allLinks = document.querySelectorAll('a[href^="#"]');
  const headerEl = document.querySelector('header');
  const isFixedHeader = headerEl.classList.contains(`${prefix.slice(1)}-header--is-fixed`);
  const isStickyHeader = headerEl.classList.contains(`${prefix.slice(1)}-header--is-sticky`);
  const headerHeight = headerEl.offsetHeight;
  const mainBlock = document.querySelector(`${prefix}-page__main`);
  const topOffset = (isFixedHeader || isStickyHeader) ? headerHeight : 0;

  mainBlock.style.marginTop = `${headerHeight}px`;

  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', (e) => {
      e.preventDefault();

      const blockID = allLinks[i].getAttribute('href');
      if (blockID !== '#') {
        const blockByID = document.querySelector(blockID);
        const blockByIDPos = blockByID.getBoundingClientRect().top;
        const blockByIDOffsetPos = blockByIDPos - topOffset;

        window.scrollBy({
          top: blockByIDOffsetPos,
          behavior: 'smooth',
        });
      } else {
        document.body.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      }
    });
  }

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
