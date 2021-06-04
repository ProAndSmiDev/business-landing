const prefix = '.bl';
const header = document.querySelector(`${prefix}-header`);
const isFixedHeader = header.classList.contains(`${prefix.slice(1)}-header--is-fixed`);
const isStickyHeader = header.classList.contains(`${prefix.slice(1)}-header--is-sticky`);
