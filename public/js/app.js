const checkbox = document.querySelector('#checkbox')
if(window.matchMedia('(prefers-color-scheme: dark)')){
console.log()
checkbox.setAttribute('checked',true)
}
//document.body.style.setProperty('--cardGray','blue')
checkbox.addEventListener('change',function(evento){
        //document.body.classList.toggle('is-dark-mode')

    if(this.checked){
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
    }else{
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
    }
})




/* checkbox.addEventListener('change',function(evento){
    console.log(this.checked)
    if(this.checked){
        document.body.classList.add('is-dark-mode')
    }else{
        document.body.removeEventListener.add('is-dark-mode')
    }
}) */
//console.log(window.matchMedia('(prefers-color-scheme: dark)'.matches))



/* const checkbox = document.querySelector('#checkbox')
if (window.matchMedia('(prefers-color-scheme: dark)'.matches)) {
  checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', function (event) {
  if (this.checked) {
    document.body.classList.remove('is-light-mode')
    document.body.classList.add('is-dark-mode')
  } else {
    document.body.classList.remove('is-dark-mode')
    document.body.classList.add('is-light-mode')
  }
}) */