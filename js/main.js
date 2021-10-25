const products = [
    {
        id: 1, 
        title: 'Notebook', 
        imageUrl: 'img/catalog/cat1.jpg',
        price: 2000
    },
    {
        id: 2, 
        title: 'Mouse',
        imageUrl: 'img/catalog/cat2.jpg',
        price: 20
    },
    {
        id: 3,
        title: 'Keyboard', 
        imageUrl: 'img/catalog/cat3.jpg',
        price: 200
    },
    {
        id: 4, 
        title: 'Gamepad', 
        imageUrl: 'img/catalog/cat4.jpg',
        price: 50
    },
    {
        id: 5, 
        title: 'Notebook', 
        imageUrl: 'img/catalog/cat5.jpg',
        price: 2000
    },
    {
        id: 6, 
        title: 'Mouse',
        imageUrl: 'img/catalog/cat6.jpg',
        price: 20
    },
    {
        id: 7,
        title: 'Keyboard', 
        imageUrl: 'img/catalog/cat7.jpg',
        price: 200
    },
    {
        id: 8, 
        title: 'Gamepad', 
        imageUrl: 'img/catalog/cat8.jpg',
        price: 50
    },
];

//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (item) => 
    `<div class="product-item">
                <h3>${item.title}</h3>
                <img class="products__image img" src="${item.imageUrl}" alt="cart">
                <p>${item.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`;

const renderPage = list => {
    
    const productsList = list.map(item => renderProduct(item)).join('');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);


