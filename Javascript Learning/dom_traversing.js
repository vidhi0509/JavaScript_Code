const rootNode = document.getRootNode();

console.log(rootNode); // document

console.log(rootNode.childNodes) // will return nodelist of child elements
const htmlElementNode = rootNode.childNodes[0]; 
console.log(htmlElementNode); // will give html node

const headElementNode = htmlElementNode.childNodes[0]; // head
console.log(headElementNode.parentNode) // will give html as a parent of head

// sibling relation 
console.log(headElementNode.nextSibling) // will give text node (new line and space)

// to ignore this new line and space wala sibling:

console.log(headElementNode.nextElementSibling); // will ignore that node and give body as its sibling

// if we want to select directly body element

const body = document.body;
console.log(body)

const container = document.querySelector(".container");

console.log(container.children) // will give only two child i.e, h1 and p