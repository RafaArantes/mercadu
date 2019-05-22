const cart = (product) => 
    `<tr>
        <td class="data name">${product.name}</td>
        <td class="data price">${product.price}</td>
    </tr>
    `
const offer = (offer) => 
    `<div id="${offerId}" class="card">
        <div class="pic"></div>
        <p>${offer}</p>
    </div>
    `
 
const banner = (banner) =>
    `<div class="banner" style="background-image: url(${banner.img_url})">
        <p class="title">${banner.cta}</p>
        <p class="off">${banner.discount}% OFF</p>
    </div>
    `
const product = (product) => 
    `<div class="product-card">
        <div class="product-image"  style="
        background-image: url(${product.img_url});">
            <button class="off-proportion">
                ${product.offer ? product.offer : ``}
            </button>
        </div>
        <p class="product-name">
            ${product.name}
        </p>
        <p class="true-price">
           R$ ${product.price}
        </p>
        <p class="old-price">
            de R$ ${product.old_price}
        </p>

        <div class="actions">
            <button id="${product.id}" class="remove-item" title="Remover do Carrinho">
                <svg viewBox="0 0 24 24">
                    <path d="M19,13H5V11H19V13Z" />
                </svg>
            </button>

            <button id="${product.id}" class="to-cart" title="Adicionar ao Carrinho">
                Adicionar ao Carrinho
            </button>
        </div>
    </div>`   
const shopping_cart = (product) => 
    `<tr>
        <td class="data name">${product.name}</td>
        <td class="data price">${product.price}</td>
    </tr>`