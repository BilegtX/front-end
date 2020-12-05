function mungu() {
    let item = document.getElementById('item')
    let price = document.getElementById('price').value
    let quantity = document.getElementById('quantity').value
    price = parseInt(price)
    quantity = parseInt(quantity)
    document.getElementById('result').innerHTML = `Чи цайны цагаар ${quantity}ш ${item} авсан. Нийт дүн ${price * quantity}.`;
}