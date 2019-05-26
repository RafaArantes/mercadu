
const productPopulator = async (products) => {
    const productsResolved = await products.json()
    const productMapped = productsResolved.map((prod) => $('#item_wrapper').append(product(prod)))
}
const bannerPopulator = banners => {
    const bannerMapped = banners.map(ban => $(`.bannerWrapper`).append(banner(ban)))
}
$(async function() {
    productPopulator(await get_products())
    bannerPopulator(await Offers(3))
    productCart(JSON.parse(localStorage.getItem('cart')))
})
