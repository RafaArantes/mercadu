SERVER_URI = "http://localhost:1337";
GATEWAY_URI = "";
BEARER_TOKEN = localStorage.getItem("jwt")
  ? "Bearer " + localStorage.getItem("jwt")
  : "";


function redirecter (url) {
  window.location.href = `/products?category=`+url
}  
const success_modal = callback => {
  Swal.fire({
    title: "Successo!",
    text: "Sua requisição foi processada com sucesso!",
    type: "success",
    confirmButtonText: "Continuar",
    onClose: callback ? callback() : ""
  });
};

const error_modal = (callback, text) => {
  Swal.fire({
    title: "Erro!",
    text,
    type: "error",
    confirmButtonText: "Continuar",
    onClose: callback ? callback() : ""
  });
};

const queryParametrify = params =>{
  if(typeof params == `string`) return params
  return Object.keys(params).reduce(
    (x1, x2, index) => x1 + x2 + `=` + Object.values(params)[index] + `&`,
    `?`
  );
}
const register_card_in_gateway = card => {
  // return fetch(GATEWAY_URI+'/register/card', {method:'POST', headers: {Authorization: BEARER_TOKEN}, body: JSON.stringify(card)})
  return {
    token:
      "A9zaASD9asd8ASxsa98SAdASDJCbASDKJAdbuiaSDDASAanosçdASDUOÇ^dASlçASDui",
    default_card: false,
    userId: card.userId
  };
};

// User and Auth requests

const login = (username, password) => {
  const login = {
    identifier: username,
    password: password
  };
  return fetch(SERVER_URI + "/auth/local", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(login)
  });
};

const register_user = (username, password, email, name) => {
  const register = {
    username,
    name,
    email,
    password
  };
  return fetch(SERVER_URI + "/auth/local/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(register)
  });
};
console.log(`heqhweqiuow`);
const get_profile = () =>
  fetch(SERVER_URI + "/users/me", {
    method: "GET",
    headers: { Authorization: BEARER_TOKEN }
  });


const get_categories = () =>
  fetch(SERVER_URI + "/categories", {
    method: "GET",
    headers: { Authorization: BEARER_TOKEN }
  });


const update_profile = update =>
  fetch(SERVER_URI + "/users/" + update.id, {
    method: "POST",
    headers: { Authorization: BEARER_TOKEN },
    body: JSON.stringify(update)
  });

// Product and Order requests

const get_products = params => 
  fetch(SERVER_URI + "/products" + (params ? queryParametrify(params) : ""), {
    method: "GET",
    headers: { Authorization: BEARER_TOKEN }
  });

const register_order = (products, user) => {
  const order = {
    order_products: products,
    userId: user,
    paid: false
  };
  return fetch(SERVER_URI + "/orders", {
    method: "POST",
    headers: { Authorization: BEARER_TOKEN },
    body: JSON.stringify(order)
  });
};

// Address requests

const register_address = (
  cep,
  addr,
  complement,
  city,
  number,
  default_address,
  user, callback
) => {
  const address = {
    cep: cep,
    address: addr,
    complement: complement,
    city: city,
    number: number,
    default_address: default_address,
    user: user
  };
  console.log(address)
  return fetch(SERVER_URI + "/addresses", {
    method: "POST",
    headers: { 
      Authorization: BEARER_TOKEN,
      "Content-Type": "application/json" },
    body: JSON.stringify(address)
  }).then(x => {
    console.log('acabou o post', callback)
    callback && callback()
  })
};

const get_address = params =>
  fetch(SERVER_URI + "/addresses/" + params.userId + queryParametrify(params), {
    method: "GET",
    headers: { Authorization: BEARER_TOKEN }
  });

const delete_address = addressId =>
  fetch(SERVER_URI + "/addresses/" + addressId, {
    method: "DELETE",
    headers: { Authorization: BEARER_TOKEN }
  });

// Cards requests

const register_card = async cardParams => {
  const gateway_response = await register_card_in_gateway(cardParams);
  return fetch(SERVER_URI + "/cards", {
    method: "POST",
    headers: { Authorization: BEARER_TOKEN },
    body: JSON.stringify(gateway_response)
  });
};

const get_cards = user =>
  fetch(SERVER_URI + "/cards/" + user, {
    method: "GET",
    headers: { Authorization: BEARER_TOKEN }
  });

const delete_card = cardId =>
  fetch(SERVER_URI + "/cards/" + cardId, {
    method: "DELETE",
    headers: { Authorization: BEARER_TOKEN }
  });

const get_products_count_with_params = (params) => 
  fetch(SERVER_URI + "/products/count" + (params ? queryParametrify(params) : ""), {
    method: "GET",
    headers: { Authorization: BEARER_TOKEN }
  });