const randomInt = (min,max) => {
   return Math.floor(Math.random() * (max-min+1) + min)
}
const randomColor = () => 
`rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`

document.querySelector('.nav__link').addEventListener
('click', function(e) {
    this.style.backgroundColor = randomColor()
    // stop propagation
    // e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener
('click', function(e) {
    this.style.backgroundColor = randomColor()
})

document.querySelector('.nav').addEventListener
('click', function(e) {
    this.style.backgroundColor = randomColor()
})