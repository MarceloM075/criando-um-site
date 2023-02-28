const verMais = document.getElementsByClassName('ver-mais')[0]
const reticencias = document.getElementsByClassName('reticencias')[0]
const textAbstract = document.getElementById('text-abstract')
const mais = document.querySelectorAll('.mais')

let textAbstractHeight = 0

window.addEventListener('load', () => {
    textAbstractHeight = document.getElementById('text-div').clientHeight
    textAbstract.style = `max-height: ${textAbstractHeight + 30}px;` 
})

window.addEventListener('resize', () => {
    textAbstractHeight = document.getElementById('text-div').clientHeight
    textAbstract.style = `max-height: ${textAbstractHeight + 30}px;`
})


verMais.addEventListener('click', () => {
    textAbstract.classList.add('teste')
    reticencias.style = 'display: none;'
    verMais.style = 'display: none;'
    Array.from(mais).forEach( e => {
        e.style = 'display: inline-block;'
    })
    textAbstract.style.maxHeight = '9999px'
})