
let formulario = document.getElementById('formulario')
let span = document.getElementById('alerta-input')
let btn = document.getElementById('btn')
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/


function validarInput() {
  let input = document.getElementById('input').value
  if (input.match(pattern)) {
    formulario.classList.add('valido');
    formulario.classList.remove('invalido');
    span.innerHTML = 'Valid email';
    setTimeout(() => {
      span.innerHTML = '';
      document.getElementById('input').value = ' ';
    }, 3000);
  }
  else{
    formulario.classList.remove('valido');
    formulario.classList.add('invalido');
    span.innerHTML = 'Please provide a valid email';
    setTimeout(() => {
      span.innerHTML = '';
      document.getElementById('input').value = ' ';
      formulario.classList.remove('invalido');
    }, 3000);
  }
}
btn.addEventListener('click', validarInput)