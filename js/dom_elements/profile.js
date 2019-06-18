const address_dom = (address) => `<div class="address-card active">
  <p class="title">${address.address} ${address.number}</p>
  <p class="description">
    ${address.default_address ? 'Esse é seu endereço padrão' : 'Este é um de seus endereços'}
  </p>

  <div class="manage" >
    <svg viewBox="0 0 24 24">
        <path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
    </svg>

    <div class="options">
      <p class="mark">Tornar Padrão</p>
      <p class="delete delete_this" id="${address._id}">Excluir</p>
    </div>
  </div>
</div>`

