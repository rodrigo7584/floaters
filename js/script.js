const btnMenu = document.querySelector('.btn-menu')
const nav = document.querySelector('nav')
btnMenu.addEventListener('click', function () {
  nav.classList.toggle('ativo')
})
const details = document.querySelectorAll('.detail')

details.forEach(function (elemento) {
  elemento.addEventListener('click', function () {
    elemento.classList.toggle('ativo')
  })
})
