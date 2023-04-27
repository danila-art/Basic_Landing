let itemsBlock = document.getElementById('section-6__innerItems');
let items = document.getElementsByClassName('section-6__container-box')

i = 0
translate = 0
let mouseStartX = 0
while (i < items.length) {
    items[i].addEventListener('mousedown', () => {
            mouseStartX = event.clientX
        document.addEventListener('mousemove', translateX)
    })
    window.addEventListener('mouseup', () => {
        console.log("Кнопка отжата")
        document.removeEventListener('mousemove', translateX)
    })
    i++
}

function translateX(event) {
    setTimeout(()=>mouseStartX = event.clientX, 100)
    if (mouseStartX > event.clientX) {
        if (translate == -50) {
            console.log('Нельзя');
        } else {
            translate = translate - .5
            itemsBlock.style.transform = 'translate(' + translate + '%)';
            console.log(translate)
        }
    } else {
        if (translate == 0) {
            console.log('Нельзя');
        } else {
            translate = translate + .5
            itemsBlock.style.transform = 'translate(' + translate + '%)';
            console.log(translate)
        }
    }
  
}


