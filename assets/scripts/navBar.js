const navCheckbox = document.getElementById('nav-checkbox')
const btnMenu = document.getElementById('btn-menu')

btnMenu.onclick = function(){
    if(navCheckbox.checked){
        navCheckbox.checked = false
    }else{
        navCheckbox.checked = true
    }
}