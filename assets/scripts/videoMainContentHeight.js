window.addEventListener("load", () => detailsHeight())



function detailsHeight(){
    const videoHeight = document.getElementById('video').clientHeight
    const detailsTitleHeight = document.getElementById('details-title').clientHeight
    const detailsTextHeight = document.getElementById('details-text')

    let windowWidth = innerWidth
    let calculation = videoHeight - 3 - detailsTitleHeight

    if(windowWidth >= 991){
        detailsTextHeight.style = `max-height: ${calculation}px;`
    }
}

setInterval(detailsHeight, 150)
