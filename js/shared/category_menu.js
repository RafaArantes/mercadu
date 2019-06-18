const populateMenu = async () => {
    const categories = await (await get_categories()).json()
    $('.second-header').html('')
    categories.forEach((category, index) => {
        if(index == 0){ 
            $('.second-header').append(menu_item({
                category: 'todos os produtos',
                icon: {
                    url: 'https://image.flaticon.com/icons/svg/1261/1261030.svg'
                }, 
                style: "opacity: 0.4; background-size: 22px; background-position: center;"
            }))
        }

        ($('.second-header').children().length <= 10 && category.icon ) && $('.second-header').append(menu_item(category))
        
    })
}
$(function() {
    populateMenu()
})