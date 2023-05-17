// selecting elements

console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
console.log(allSections);

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons);

// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div')
message.innerHTML = 'We use cookied for improved functionality and analytics. <button class="btn btn--close--cookie">Got it!</button>'

// header.prepend(message)
header.append(message)

header.before(message)
header.after(message)

// delete elements
document.querySelector('.btn--close--cookie').addEventListener('click', function() {
    message.remove();
})

// styles
message.style.backgroundColor = '#37383d'
message.style.width = '120%'

console.log(message.style.color); // this will print nothing as we have not set color property
console.log(message.style.backgroundColor); // this will get printed

console.log(getComputedStyle(message).color);

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10)+ 40 + 'px'

document.documentElement.style.setProperty('--color-primary', 'orangered')

// attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'
// reading non-standard attributes

console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist')

console.log(logo.src); // this gives absolute path
console.log(logo.getAttribute('src')); // this gives relative path

// data attributes
// it has to start with data


// classes
logo.classList.add()
logo.classList.remove()
logo.classList.toggle()
logo.classList.contains()

// events
const h1 = document.querySelector('h1')
const alertH1 = function(e) {
    alert('addEventListener: Great! You are reading the heading')

    h1.removeEventListener('mouseenter', alertH1)
}
h1.addEventListener('mouseenter', alertH1)

h1.onmouseenter = function(e) {
    alert('onmouseenter: Great! You are reading the heading')
}

// selecting child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white'

// parents

console.log(h1.parentNode);
console.log(h1.parentElement);

console.log(h1.closest('.header'));

// siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children); // getting all siblings
[...h1.parentElement.children].forEach(function(el) {
    if(el!==h1) el.style.tranform = 'scale(0.5)'
})