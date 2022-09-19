
const   buttons     = document.querySelectorAll('button'),
        template    = document.querySelector('template'),
        fragment    = document.createDocumentFragment(),
        list     = document.querySelector('ul');

        
const carStore = {}
const addToCar = (e) => {
    list.textContent = ''
    const product = {
        title: e.target.dataset.fruta,
        id   : e.target.dataset.fruta,
        cant : 1,
    };
    if(carStore.hasOwnProperty(product.title)) {
        product.cant = carStore[product.title].cant + 1
    }
    carStore[product.title] = product
    showCar()
};

const showCar = () => {
    Object.values(carStore).forEach( item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('span').textContent = item.title;
        clone.querySelector('.badge').textContent = item.cant;

        fragment.appendChild(clone)

    })
    list.appendChild(fragment)
}
buttons.forEach( button => button.addEventListener('click',addToCar));

{/* <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="lead">A list item</span>
        <span class="badge bg-primary rounded-pill">14</span>
</li> */}