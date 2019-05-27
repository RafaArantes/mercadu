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

const handleElementSelection = (commonElement, clickedElement) => {
    $(commonElement).removeClass(`active`)
    $(clickedElement).addClass(`active`)
}

const addressListPopulator = async (arrayOfAddresses) => {
    if(!isUserLogged()) return
    $('.address_kit').html('')
    arrayOfAddresses.forEach(address => {
        console.log(address)
        $('.address_kit').append(deliver_addresses(address))
    })
}

const handlePayment = () => {
    const paymentBase = {
        user: localStorage.getItem('jwt'),
        address: $(`.address-card.active`).attr(`id`),
        items: JSON.parse(localStorage.getItem(`cart`))
    }
    const paymentObject = $(`#forceCard`).hasClass(`active`) ? {...paymentBase, type: `card`, token: $('.credit-card-entry.active').attr(`id`)} : {...paymentBase, type: `boleto`}
    !isUserLogged() ? error_modal(openLogin, `Por favor, se registre ou faça login antes de realizar uma compra`) : success_modal()
    console.log(paymentObject)
}

$(async function(){
    // Initialization
    handleLogin()
    const user_profile = await (await get_profile()).json()
    productCart(JSON.parse(localStorage.getItem('cart')))
    checkoutListPopulator(JSON.parse(localStorage.getItem('cart')))
    addressListPopulator(user_profile.addresses)
    

    // Page bindings
    $('body').on('click', '.address-card', function(){
        handleElementSelection('.address-card', this)
    })

    $('body').on('click', '.credit-card-entry', function(){
        handleElementSelection('.credit-card-entry', this)
    })
    
    $('body').on('click', '.remove_checkout', function(){
        const productId = $(this).attr('id')
        remove_product(productId, checkoutListPopulator)
    })

    $('body').on('click', '#finish', handlePayment)
})