const input = document.getElementById('nav-toggle')
const navToggler = document.getElementById('btnMenu')

btn.onclick = function(){
    if(input.checked){
        input.checked = false
    }else{
        input.checked = true
    }
}