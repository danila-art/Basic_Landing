window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        document.getElementById('main__header').style.backgroundColor = 'white'
        document.getElementById('headerLogo').src = "img//logo-2.svg"
        let arrButton = document.getElementsByClassName('navButtonA')
        let i = 0
        while (i < arrButton.length) {
            arrButton[i].style.color = 'black'
            i++
        }
    }
    if (window.scrollY < 50) {
        document.getElementById('main__header').style.backgroundColor = 'rgba(0, 0, 0, 0.0)'
        document.getElementById('headerLogo').src = "img//logo.svg"
        let arrButton = document.getElementsByClassName('navButtonA')
        let i = 0
        while (i < arrButton.length) {
            arrButton[i].style.color = 'white'
            i++
        }
    }
})


let moduleBlock = document.getElementById('moduleBlock')
let moduleBlockClose = document.getElementById('moduleBlockClose')
let buttonOpenModuleBlock = document.getElementById('buttonOpenModuleBlock')
buttonOpenModuleBlock.addEventListener('click', () => {
    moduleBlock.style.display = "block"
    moduleBlockClose.addEventListener('click', () => {
        moduleBlock.style.display = 'none'
    })
})
