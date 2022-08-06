const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(x => {
  x.addEventListener('click', () => {
    x.parentNode.classList.toggle('active')
  })
})