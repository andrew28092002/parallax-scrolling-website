const stars = document.querySelector('#stars')
const moon = document.querySelector('#moon')
const mountainsBehind = document.querySelector('#mountains_behind')
const text = document.querySelector('#text')
const btn = document.querySelector('#btn')
const header = document.querySelector('header')

const scrollImages = () => {
    const scrollY = window.scrollY

    stars.style.left = scrollY*0.25 + 'px'
    moon.style.top = scrollY*1.05 + 'px'
    mountainsBehind.style.top = scrollY*0.5 + 'px'
    text.style.marginRight = scrollY*4 + 'px'
    text.style.marginTop = scrollY*1.5 + 'px'
    btn.style.marginTop = scrollY*1.5 + 'px'
    header.style.top = scrollY*0.7 + 'px'
}

window.addEventListener('scroll', scrollImages)