let section_2 = document.getElementById('section_2');
let section_3 = document.getElementById('section_3');
let section_4 = document.getElementById('section_4');
let section_5 = document.getElementById('section_5');
let section_6 = document.getElementById('section_6');
let section_7 = document.getElementById('section_7');
let footer = document.getElementById('footer');
window.addEventListener('scroll', () => {
    if (window.scrollY > 700) {
        section_2.style.opacity = "1"
    }
    if (window.scrollY > (700 * 2)) {
        section_3.style.opacity = "1"
    }
    if (window.scrollY > (3700)) {
        section_4.style.opacity = "1"
    }
    if (window.scrollY > (3700 + 700)) {
        section_5.style.opacity = "1"
    }
    if (window.scrollY > (3700 + (1400 + 100))) {
        section_6.style.opacity = "1"
    }
    if (window.scrollY > (3700 + (2100 + 100))) {
        section_7.style.opacity = "1"
    }
    if (window.scrollY > (3700 + (2800 + 100))) {
        footer.style.opacity = "1"
    }
});