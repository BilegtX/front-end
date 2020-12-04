function mungu() {
    let item = document.getElementById('item')
    let price = document.getElementById('price')
    let quantity = document.getElementById('quantity')
    document.getElementById('result').innerHTML = `Чи цайны цагаар ${quantity}ш ${item} авсан. Нийт дүн ${price * quantity}.`;
    // console.log(price, quantity);
    // console.log(`Чи цайны цагаар ${quantity}ш ${item} авсан. Нийт дүн ${price * quantity}.`);
}