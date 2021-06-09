document.addEventListener('DOMContentLoaded', () => {
  const allSections = document.querySelectorAll('section');

  if (isFixedHeader || isStickyHeader) {
    allSections.forEach((block) => {
      block.style.paddingTop = `${header.offsetHeight}px`;
    });
  }
});
