const checkoutListPopulator = async (arrayOfProducts) => {
    const productsToResolve = await get_products()
    const products = await productsToResolve.json()
    const productObject = arrayOfProducts.map(x => products.find(product => product.id == x.id))
    $('.entry_holder').html('')
    productObject.forEach(product => {
        const productBasicInfo = arrayOfProducts.find(prod => prod.id == product.id)
        console.log( Number(productBasicInfo.quantity * product.price))
        $('.entry_holder').append(table_elements({...product, quantity: productBasicInfo.quantity, price: product.price, total: Number(productBasicInfo.quantity * product.price).toFixed(2)}))
    })
}

const addressListPopulator = async (arrayOfAddresses) => {
    $('.address_kit').html('')
    arrayOfAddresses.forEach(address => {
        console.log(address)
        $('.address_kit').append(deliver_addresses(address))
    })
}
$(async function(){

    productCart(JSON.parse(localStorage.getItem('cart')))
    checkoutListPopulator(JSON.parse(localStorage.getItem('cart')))
    const user_profile = await (await get_profile()).json()
    addressListPopulator(user_profile.addresses)
    $('body').on('click', '.remove_checkout', function(){
        const productId = $(this).attr('id')
        remove_product(productId, checkoutListPopulator)
    })
})