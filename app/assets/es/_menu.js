/**
 * Нужно оптимизировать и создать код для скролла страницы
 * 1. Скролл по клику с изменением состояния пункта меню
 * 2. Скролл страницы с изменением состояния пункта меню
 */
// document.addEventListener('DOMContentLoaded', () => {
//   const clientSize = window.screen.width;

//   if (clientSize >= 1024) {
//     const header = document.querySelector(`${prefix}-header.js--scroll-by-user`);
//     const isFixed = header.classList.contains(`${prefix.slice(1)}-header--is-fixed`);
//     const isSticky = header.classList.contains(`${prefix.slice(1)}-header--is-sticky`);
//     const headerHeight = (isFixed || isSticky) ? header.offsetHeight : 0;
//     const menuLine = document.querySelector(`${prefix}-menu__line`);
//     const menuItem = document.querySelectorAll(`header ${prefix}-menu-list__item`);
//     const allSections = document.querySelectorAll('section');

//     menuItem[0].classList.add(`${prefix}-menu-list__item--is-active`);

//     menuItem.forEach((el, i) => {
//       if (el.classList.contains(`${prefix}-menu-list__item--is-active`)) {
//         menuLine.style.width = `${el.offsetWidth - 15}px`;
//         menuLine.style.left = `${el.offsetLeft}px`;
//       } else {
//         menuLine.style.width = `${menuItem[0].offsetWidth - 15}px`;
//         menuLine.style.left = `${menuItem[0].offsetLeft}px`;
//       }

//       el.addEventListener('mouseenter', () => {
//         menuLine.style.width = (i !== menuItem.length - 1) ? `${el.offsetWidth - 15}px` : `${el.offsetWidth}px`;
//         menuLine.style.left = `${el.offsetLeft}px`;
//       });

//       el.addEventListener('mouseleave', () => {
//         menuLine.style.width = `${menuItem[0].offsetWidth - 15}px`;
//         menuLine.style.left = '0';
//       });

//       el.addEventListener('click', () => {
//         if (el.classList.contains(`${prefix.slice(1)}-menu-list__item--is-active`)) {
//           el.classList.remove(`${prefix.slice(1)}-menu-list__item--is-active`);
//         }

//         menuItem[i].classList.add(`${prefix.slice(1)}-menu-list__item--is-active`);
//       });
//     });

//     window.addEventListener('scroll', () => {
//       const scrollDistance = window.scrollY;

//       allSections.forEach((el, i) => {
//         if (el.offsetTop - headerHeight <= scrollDistance) {
//           menuItem.forEach((el) => {
//             if (el.classList.contains(`${prefix.slice(1)}-menu-list__item--is-active`)) {
//               el.classList.remove(`${prefix.slice(1)}-menu-list__item--is-active`);
//             }
//           });

//           menuItem[i].classList.add(`${prefix.slice(1)}-menu-list__item--is-active`);
//         }
//       });
//     });
//   }
// });
