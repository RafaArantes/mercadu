/////////////////////////
// VARIÁVEIS
/////////////////////////
/* Seleciona o conteúdo dos modais */
var ResetModal = ".login, .cadastro, .product-modal";

/* Seleciona os botões das seções no perfil */
var allButtons = "aside > button";

/* Seleciona o conteúdo das seções no perfil */
var ResetSections = ".personal-info, .address-info, .payment-info, .account-info";

const openLogin = () => {
  	$(ResetModal).hide();
    $(".darkFrame, .login").show();
}
const closeModal = () => {
  $(".darkFrame").hide();
  $('body').removeClass("block-scrolling");
  $(".frame").removeClass("NeedMoreSpace");
  $(".frame").removeClass("large");
}
const handleLoading = () => {
  $('#loading').toggleClass('active')
}
/////////////////////////
// INTERAÇÕES
/////////////////////////
$(document).ready(function(){
  $(".menu").click(function(){
    $('body').toggleClass("block-scrolling");
    $(".second-header").toggleClass("active");
    $(".darkFrame").hide();
  });

  $(".cart").click(function(){
    $(".start-checkout").toggleClass("active");
    productCart(JSON.parse(localStorage.getItem('cart')))
  });

  $(".profile").click(function(){
  	$(ResetModal).hide();
    $(".darkFrame, .login").show();
  });

  $(".product-image").click(function(){
  	$(ResetModal).hide();
    $('body').addClass("block-scrolling");
    $(".frame").addClass("large");
    $(".darkFrame, .product-modal").show();
  });

  $(".GoToSignUp").click(function(){
  	$(ResetModal).hide();
    $(".cadastro").show();
    $(".frame").addClass("NeedMoreSpace");
  });

  $(".close-modal").click(function(){
    $(".darkFrame").hide();
    $('body').removeClass("block-scrolling");
    $(".frame").removeClass("NeedMoreSpace");
    $(".frame").removeClass("large");
  });

  /* Relativo ao funcionamento do select personalizado nas páginas */
  $("#price-order").click(function(){
    $("#price-type").slideToggle(150);
  });

  $("#categoria").click(function(){
    $("#cat-op").slideToggle(150);
  });

  $("#pricing").click(function(){
    $("#pricing-type").slideToggle(150);
  });

  // PRODUCTS.HTML
  $("#go-to-search").click(function(){
    $('#product-search').focus();
  });

  // PROFILE.HTML
  $(allButtons).click(function(){
    $(allButtons).removeClass("active");
    $(this).addClass("active");
  });

  $("#showPersonalInfo").click(function(){
    $(ResetSections).hide();
    $(".personal-info").show();
  });

  $("#showAddressInfo").click(function(){
    $(ResetSections).hide();
    $(".registerNewAddress").hide();
    $(".address-info, .currentAddress").show();
  });

  $("#showPaymentInfo").click(function(){
    $(".addCard").hide();
    $(ResetSections).hide();
    $(".currentCards").show();
    $(".payment-info").show();
  });

  $("#showAccountInfo").click(function(){
    $(ResetSections).hide();
    $(".account-info").show();
  });

  $(".manage").click(function(){
    $(".options", this).toggle();
  });

  $("#create-new-address").click(function(){
    $(".currentAddress").hide();
    $(".registerNewAddress").show();
  });

  $("#create-new-card").click(function(){
    $(".currentCards").hide();
    $(".addCard").show();
  });

  $(".changer-wrapper > button").click(function(){
    $(".changer-wrapper > button").removeClass("active");
    $(this).addClass("active");
  });

  $("#forceCard").click(function(){
    $(".credit-card-list").show();
    $(".boleto-list").hide();
  });

  $("#forceBoleto").click(function(){
    $(".credit-card-list").hide();
    $(".boleto-list").show();
  });

  $("#finish").click(function(){
  	$(ResetModal).hide();
    $('body').addClass("block-scrolling");
    $(".frame").removeClass("NeedMoreSpace");
    $(".frame").removeClass("large");
    $(".darkFrame, .buyingComplete").show();
  });
});
