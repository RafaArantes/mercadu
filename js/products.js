const customSelectPopulator = async (categories) => {
    $(`#cat-op`).html(``)
    $(`#cat-op`).append(`<div class="option custom_select_option" data-id="">Todos</div>`)
    categories.forEach(category => $(`#cat-op`).append(custom_select({placeholder: category.category.capitalize(), name: category.category, id: category.id})))
}

const productPopulator = async (products) => {
    const productsResolved = await products.json()
    $('#item_wrapper').html(``)
    const productMapped = productsResolved.map((prod) => $('#item_wrapper').append(product(prod)))
}

const bannerPopulator = banners => {
    const bannerMapped = banners.map(ban => $(`.bannerWrapper`).append(banner(ban)))
}

const counterPopulator = (counter, index) => {
    $(`.categories`).append(counter_banner(counter,index))
}

const customSelectHandler = (selectWrapper, elementClicked) => {
    const value = $(elementClicked).html()
    const id = $(elementClicked).attr(`data-id`)
    const name = $(elementClicked).attr(`name`)
    $(selectWrapper).children(`.selected-option`).html(value).attr(`data-id`, id).attr('name', name)
}
const productFilter = async () => {
    handleLoading()
    const initialFilter = $('#product-search').val() ? {name:$('#product-search').val()} : {}
    const categoryFilter = $('#categoria').find('.selected-option').attr('data-id') ? {category: $('#categoria').find('.selected-option').attr('data-id')} : {}
    const discountFilter = $('#pricing').find('.selected-option').attr('data-id') ? {discount_gt: 0} : {}
    const finalSearch = {
        ...initialFilter,
        ...categoryFilter,
        ...discountFilter
    }
    history.pushState(null, '', queryParametrify(finalSearch))
    
    productPopulator(await get_products(finalSearch))
    handleLoading()
}

const productSort = () => {

}

$(async function() {
    handleLogin()
    const categories = await (await get_categories()).json()
    customSelectPopulator(categories)
    productPopulator(await get_products(window.location.search))
    bannerPopulator(await Offers(3))
    productCart(JSON.parse(localStorage.getItem('cart')))
    handleLoading(true)
    
    const counters = await Promise.all(categories.map(async x => await (await get_products_count_with_params({category: x.id})).json()))
    categories.slice(0,6).map((x, index) => counterPopulator({...x, counter: counters[index]}, index))
    $(`body`).on(`click`, `.custom_select_option`, function(){
        customSelectHandler($(this).parent().parent(), this)
    })
    $(`.StartSearch`).click(productFilter)
})
