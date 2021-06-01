document.addEventListener('DOMContentLoaded', () => {
  const getOffsetPos = (blockPos, offsetByTop) => blockPos - offsetByTop;
  const scrollToStart = () => document.body.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
  });
  const scrollToBlock = (offset) => window.scrollBy({
    top: offset,
    behavior: 'smooth',
  });

  const scrollDistance = window.scrollY;
  const allLinks = document.querySelectorAll('a[href^="#"]');
  const header = document.querySelector(`${prefix}-header.js--scroll-by-user`);
  const mainBlock = document.querySelector(`${prefix}-page__main`);
  const isFixed = header.classList.contains(`${prefix.slice(1)}-header--is-fixed`);
  const isSticky = header.classList.contains(`${prefix.slice(1)}-header--is-sticky`);
  const headerHeight = (isFixed || isSticky) ? header.offsetHeight : 0;
  const menuItem = document.querySelectorAll(`header ${prefix}-menu-list__item`);
  const allSections = document.querySelectorAll('section');

  if (isFixed || isSticky) {
    mainBlock.style.marginTop = `${headerHeight}px`;
  }

  for (let i = 0; i < allLinks.length; i++) {
    allLinks[i].addEventListener('click', (e) => {
      e.preventDefault();

      const blockID = allLinks[i].getAttribute('href');

      if (blockID !== '#') {
        const blockByID = document.querySelector(blockID);
        const blockByIDPos = blockByID.getBoundingClientRect().top;

        scrollToBlock(getOffsetPos(blockByIDPos, headerHeight));
      } else {
        scrollToStart();
      }
    });
  }

  // window.addEventListener('scroll', () => {
  //   allSections.forEach((el, i) => {
  //     if (el.offsetTop - header.clientHeight <= scrollDistance) {
  //       console.log(el.offsetTop - header.clientHeight);

  //       menuItem.forEach((link) => {
  //         if (link.classList.contains(`${prefix.slice(1)}-menu-list__item--is-active`)) {
  //           link.classList.remove(`${prefix.slice(1)}-menu-list__item--is-active`);
  //         }
  //       });

  //       menuItem[i].classList.add(`${prefix.slice(1)}-menu-list__item--is-active`);
  //     }
  //   });
  // });
});
