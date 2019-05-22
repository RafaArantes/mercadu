const checkoutListPopulator = async (arrayOfProducts) => {
    const products = await Products()
    const productObject = arrayOfProducts.map(x => products.find(product => product.id == x.id))
    $('.entry_holder').html('')
    productObject.forEach(product => {
        const productBasicInfo = arrayOfProducts.find(prod => prod.id == product.id)
        console.log( Number(productBasicInfo.quantity * product.price))
        $('.entry_holder').append(table_elements({...product, quantity: productBasicInfo.quantity, price: product.price, total: Number(productBasicInfo.quantity * product.price).toFixed(2)}))
    })
}
$(async function(){
    productCart(JSON.parse(localStorage.getItem('cart')))
    checkoutListPopulator(JSON.parse(localStorage.getItem('cart')))
    $('body').on('click', '.remove_checkout', function(){
        const productId = $(this).attr('id')
        remove_product(productId, checkoutListPopulator)
    })
})