const toggles = document.querySelectorAll('.faq__toggle');
console.log(toggles);
toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
