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
    setTimeout(() => mouseStartX = event.clientX, 100)
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
let slide1 = document.getElementById('slide1')
let labelSlide1 = document.getElementById('labelSlide1')
slide1.addEventListener('click', () => {
    translate = 0
    itemsBlock.style.transition = '.5s'
    itemsBlock.style.transform = 'translate(' + translate + '%)';
    setTimeout(() => {
        itemsBlock.style.removeProperty('transition')
    }, 600)
    labelSlide1.style.backgroundColor = "rgba(255, 68, 0, 0.9)"
    labelSlide1.style.transform = 'scale(1.1)'
    labelSlide2.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide2.style.transform = 'scale(1)'
    labelSlide3.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide3.style.transform = 'scale(1)'
    labelSlide4.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide4.style.transform = 'scale(1)'
});

let slide2 = document.getElementById('slide2')
let labelSlide2 = document.getElementById('labelSlide2')
slide2.addEventListener('click', () => {
    translate = -18
    itemsBlock.style.transition = '.5s'
    itemsBlock.style.transform = 'translate(' + translate + '%)';
    setTimeout(() => {
        itemsBlock.style.removeProperty('transition')
    }, 600)
    labelSlide1.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide1.style.transform = 'scale(1)'
    labelSlide2.style.backgroundColor = "rgba(255, 68, 0, 0.9)"
    labelSlide2.style.transform = 'scale(1.1)'
    labelSlide3.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide3.style.transform = 'scale(1)'
    labelSlide4.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide4.style.transform = 'scale(1)'
});
let slide3 = document.getElementById('slide3')
let labelSlide3 = document.getElementById('labelSlide3')
slide3.addEventListener('click', () => {
    translate = -33
    itemsBlock.style.transition = '.5s'
    itemsBlock.style.transform = 'translate(' + translate + '%)';
    setTimeout(() => {
        itemsBlock.style.removeProperty('transition')
    }, 600)
    labelSlide1.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide1.style.transform = 'scale(1)'
    labelSlide2.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide2.style.transform = 'scale(1)'
    labelSlide3.style.backgroundColor = "rgba(255, 68, 0, 0.9)"
    labelSlide3.style.transform = 'scale(1.1)'
    labelSlide4.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide4.style.transform = 'scale(1)'
});

let slide4 = document.getElementById('slide4')
let labelSlide4 = document.getElementById('labelSlide4')
slide4.addEventListener('click', () => {
    translate = -50
    itemsBlock.style.transition = '.5s'
    itemsBlock.style.transform = 'translate(' + translate + '%)';
    setTimeout(() => {
        itemsBlock.style.removeProperty('transition')
    }, 600)
    labelSlide1.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide1.style.transform = 'scale(1)'
    labelSlide2.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide2.style.transform = 'scale(1)'
    labelSlide3.style.backgroundColor = "rgba(255, 68, 0, 0.4)"
    labelSlide3.style.transform = 'scale(1)'
    labelSlide4.style.backgroundColor = "rgba(255, 68, 0, 0.9)"
    labelSlide4.style.transform = 'scale(1.1)'
});

