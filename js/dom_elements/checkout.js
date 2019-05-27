const deliver_addresses = (address) => 
    `<div class="address-card ${address.default_address ? 'active' : ''}" id='${address.id}'>
          <p class="title">${address.address} ${address.number}</p>
          <p class="description">
            ${address.default_address ? 'Esse é seu endereço padrão' : 'Este é um de seus endereços'}
          </p>
    </div>`

const table_elements = (product) => 
    `<div class="entry">
        <div class="cell">
            <button id="${product.id}" class="remove remove_checkout" title="Remover Produto">
                <svg viewBox="0 0 24 24">
                    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                </svg>
            </button>
            <p class="product-name">
                ${product.name}
            </p>
        </div>
        <div class="cell">
            <p class="product-quantity">
            ${product.quantity}
            </p>
        </div>
        <div class="cell">
            <p class="product-value">
            R$ ${product.price}
            </p>
        </div>
        <div class="cell">
            <p class="product-total">
                R$ ${product.total}
            </p>
        </div>
    </div>`