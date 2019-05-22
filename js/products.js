const productPopulator = (products) => {
    const productMapped = products.map((prod) => $('#item_wrapper').append(product(prod)))
    console.log(productMapped)
}
const bannerPopulator = banners => {
    const bannerMapped = banners.map(ban => $(`.bannerWrapper`).append(banner(ban)))
}
$(async function() {
    productPopulator(await Products())
    bannerPopulator(await Offers(3))
    productCart(JSON.parse(localStorage.getItem('cart')))
})
