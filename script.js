const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav')) // adds 'show-nav to container on a click

close.addEventListener('click', () => container.classList.remove('show-nav')) // removes 'show-nav to container on a click

