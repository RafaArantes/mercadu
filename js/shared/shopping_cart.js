const productClicked = (element, operation) => {
    const productId = $(element).attr('id')
    const isOnCart = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart')).find(product => product.id == productId) ? true : false
    if(operation == `remove`){
        isOnCart && (!$('.start-checkout').hasClass('active') && $('.start-checkout').addClass('active'))
    } else {
        !$('.start-checkout').hasClass('active') && $('.start-checkout').addClass('active')
    }
    
    const shoppingCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    localStorage.setItem('cart', JSON.stringify(productFindAndReduce(shoppingCart, productId, operation)))
    productCart(JSON.parse(localStorage.getItem('cart')))
}

const calculateDiscount = (price, discount) => (price - (price * (discount / 100))).toFixed(2)

const productFindAndReduce = (arrayOfProducts, id, operator) => {
    const isNewProduct = arrayOfProducts.findIndex(x => x.id === id) >= 0 ? arrayOfProducts.findIndex(x => x.id === id) : false
    const productTreater =  isNewProduct !== false ? arrayOfProducts.find(x => x.id === id) : operator !== 'add' ? false : {id: id, quantity: 1}
    if(!productTreater) return arrayOfProducts
    const refine = () => {
        operator == 'add' ? arrayOfProducts[isNewProduct].quantity = arrayOfProducts[isNewProduct].quantity + 1 : arrayOfProducts[isNewProduct].quantity = arrayOfProducts[isNewProduct].quantity - 1
        if(operator !== 'add' && arrayOfProducts[isNewProduct].quantity <= 0) return arrayOfProducts.filter(product => product.id !== arrayOfProducts[isNewProduct].id)
        return arrayOfProducts
    }
    return isNewProduct !== false ?  refine() :  [...arrayOfProducts, productTreater] 
}

const remove_product = (id, callback) => {
    const products = JSON.parse(localStorage.getItem('cart'))
    const filteredProducts = products.filter(product => id !== product.id)
    localStorage.setItem('cart', JSON.stringify(filteredProducts))
    productCart(JSON.parse(localStorage.getItem('cart')))
    callback && callback(JSON.parse(localStorage.getItem('cart')))
}

const productCart = async (cart) => {
    const productsToResolve = await get_products()
    const products = await productsToResolve.json()
    const totals = cart.reduce((x1, x2) => {
        return x1 + Number(calculateDiscount(products.find(x => x.id == x2.id).price, products.find(x => x.id == x2.id).discount) * cart.find(x => x.id == x2.id).quantity)
    }, 0)
    $('.fullPrice').html('R$ '+totals.toFixed(2))
    $('.cart_products').html('')
    cart.forEach(x =>{
        const productInfo = products.find(product => product.id == x.id)
        const product = {price: 'R$ '+(x.quantity * calculateDiscount(productInfo.price, productInfo.discount)).toFixed(2), name: productInfo.name}
        $('.cart_products').append(shopping_cart(product))
    })
}
$(function(){
    $('body').on('click', '.to-cart', function() { productClicked(this,'add')})
    $('body').on('click', '.remove-item', function() { productClicked(this,'remove')})
})