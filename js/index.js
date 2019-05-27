const productPopulator = async (products) => {
    const productsResolved = await products.json()
    const productMapped = productsResolved.map((prod) => $('#item_wrapper').append(product(prod)))
}
const bannerPopulator = banners => {
    const bannerMapped = banners.map(ban => $(`.bannerWrapper`).append(banner(ban)))
}

const counterPopulator = (counter, index) => {
    $(`.categories`).append(counter_banner(counter,index))
}
$(async function() {
    handleLogin()
    const categories = await (await get_categories()).json()
    const counters = await Promise.all(categories.map(async x => await (await get_products_count_with_params({category: x.id})).json()))
    categories.slice(0,6).map((x, index) => counterPopulator({...x, counter: counters[index]}, index))
    productPopulator(await get_products({_limit: 10, discount_gt:0}))
    bannerPopulator(await Offers(3))
    productCart(JSON.parse(localStorage.getItem('cart')))
    handleLoading()
})
