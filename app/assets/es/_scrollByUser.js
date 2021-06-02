/**
 * Нужно оптимизировать код и переименовать файл
 * 1. Создать плавный скролл по всем ссылкам-якорям
 * 2. Переименовать файл в плавный скрол
*/

// document.addEventListener('DOMContentLoaded', () => {
//   const getOffsetPos = (blockPos, offsetByTop) => blockPos - offsetByTop;
//   const scrollToStart = () => document.body.scrollIntoView({
//     block: 'start',
//     behavior: 'smooth',
//   });
//   const scrollToBlock = (offset) => window.scrollBy({
//     top: offset,
//     behavior: 'smooth',
//   });


//   const allLinks = document.querySelectorAll('a[href^="#"]');
//   const header = document.querySelector(`${prefix}-header.js--scroll-by-user`);
//   const mainBlock = document.querySelector(`${prefix}-page__main`);
//   const isFixed = header.classList.contains(`${prefix.slice(1)}-header--is-fixed`);
//   const isSticky = header.classList.contains(`${prefix.slice(1)}-header--is-sticky`);
//   const headerHeight = (isFixed || isSticky) ? header.offsetHeight : 0;

//   if (isFixed || isSticky) {
//     mainBlock.style.marginTop = `${headerHeight}px`;
//   }

//   for (let i = 0; i < allLinks.length; i++) {
//     allLinks[i].addEventListener('click', (e) => {
//       e.preventDefault();

//       const blockID = allLinks[i].getAttribute('href');

//       if (blockID !== '#') {
//         const blockByID = document.querySelector(blockID);
//         const blockByIDPos = blockByID.getBoundingClientRect().top;

//         scrollToBlock(getOffsetPos(blockByIDPos, headerHeight));
//       } else {
//         scrollToStart();
//       }
//     });
//   }
// });
