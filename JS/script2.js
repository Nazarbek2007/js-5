const product = receipt()

console.log(product);
let result = 'Вы заказали ';
let price = 0;
for (const key in product) {
    result += key + ' ' + product[key].info + ', ';
    price += product[key].price;
}
price += 9000;
result += ` | Общая стоимость ${price} сумм с доставкой (9000)`;
console.log(result);
alert(result)

