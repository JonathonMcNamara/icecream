const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2
}]

const cones = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2
}]

function drawIceCream() {
    let template = ''
    iceCream.forEach(item => {
    template +=`
    <div class="col-4 cone-item p-2">
        <div>
        <img class="img-fluid" src="${item.image}" alt="">
            <h3 class="bg-warning text-light flavor-name mb-0">${item.name}</h3>
            <h3 class="bg-warning text-light price p-2">$${item.price}</h3>
            </div>
        </div>
`})
    let creamElm = document.getElementById('flavors')
    creamElm.innerHTML = template
}
drawIceCream()

function drawCones() {
    let template = ''
    cones.forEach(item => {
    template += `
    <div class="col-4 cone-item p-2">
        <div>
        <img class="img-fluid" src="${item.image}" alt="">
            <h3 class="bg-warning text-light cone-name mb-0">${item.name}</h3>
            <h3 class="bg-warning text-light price p-2">$${item.price}</h3>
            </div>
        </div>
`})
let coneElm = document.getElementById('cones')
coneElm.innerHTML = template 
}
drawCones()

function drawToppings(){
    let template = ''
    toppings.forEach(item => {
    template += `
    <div class="col-4 toppings p-2">
    <div>
    <img class="img-fluid" src="${item.image}" alt="">
        <h3 class="bg-warning text-light toppings-name mb-0">${item.name}</h3>
        <h3 class="bg-warning text-light price p-2">$${item.price}</h3>
        </div>
    </div>
`})
let topElement = document.getElementById('toppings')
topElement.innerHTML = template
}
drawToppings()