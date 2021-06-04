document.addEventListener('DOMContentLoaded', () => {
  const mainBlock = document.querySelector(`${prefix}-main`);

  if (isFixedHeader || isStickyHeader) {
    mainBlock.style.marginTop = `${header.offsetHeight}px`;
  }
});
