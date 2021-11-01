class ProductsList {
    constructor (container = '.products'){
        this.container = container;
        this.goods = [];
        this.goodsObjects =[];
        this._fetchGoods();
        this._render(); //вывод товаров на страницу
    }

    _fetchGoods() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000, img: 'img/catalog/cat1.jpg'},
            {id: 2, title: 'Mouse', price: 1500, img: 'img/catalog/cat2.jpg'},
            {id: 3, title: 'Keyboard', price: 5000, img: 'img/catalog/cat3.jpg'},
            {id: 4, title: 'Gamepad', price: 4500, img: 'img/catalog/cat4.jpg'},
        ];
    }

     //Метод для вывода итоговой суммы корзины
        getSum () {
            // let sumGoods = document.querySelector('goods-list__total');
            // let sum = 0;
            // this.goods.forEach (item => {
            //     sum += item.price;
            // });
            // console.log(sum);
            // alert(sum);
            // sumGoods.insertAdjacentHTML('beforeend', `${sum} руб.`);

             //reduce используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата.
        let res = this.goodsObjects.reduce((s, item) => s + item.price,0);
        alert(res);
        }



    _render(){
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem (product);
            // this.goodsObjects.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

}
        class ProductItem {
            constructor (item) {
                this.id = item.id;
                this.title = item.title;
                this.price = item.price;
                this.img = item.img;
            }

    getHTMLString () {
        return `<div class="product-item" data-id="${this.id}">
                    <h3>${this.title}</h3>
                    <img class="products__image img" src="${this.img}" alt="cart">
                    <p>${this.price.toLocaleString()} руб.</p>
                    <button class="buy-btn">Купить</button>
                </div>`;
    }
}

    const catalog = new ProductsList();
    catalog.getSum();





// класс для корзины товаров
    class Card {


        addProduct () {
            
        }

        
        removeProduct () {
            
        }
        render(){
            
        }
    }


// класс для элемента корзины товаров
    class CardItem {
        render(){
            
        }
    }


