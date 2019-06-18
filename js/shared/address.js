const address = (callback) => {
  const validator = [
    $("#data-zip").val(),
    $("#data-address").val(),
    $("#data-extra").val(),
    $("#data-city").val(),
    $("#data-number").val()
  ].reduce((x1, x2) => {
    if (!x1) return false;
    return x2.length == 0 ? false : true;
  }, true);
  if(validator){
  register_address(
      $('#data-zip').val(),
      $('#data-address').val(),
      $('#data-extra').val(),
      $('#data-city').val(),
      $('#data-number').val(),
      false,
      JSON.parse(localStorage.getItem('user')).id,
      callback ? callback : false
  )}
};
const isProfile = window.location.href.split('/')[window.location.href.split('/').length - 1] == 'profile' 
const restartAddress = async () => {
  const user_profile = await (await get_profile()).json()
  isProfile && (addressListPopulatorProfile(user_profile.addresses))
}



$(async function() {
  $("#save-new-address").click(function() {
    isProfile ?  
    address(() => {
      restartAddress()
      $(ResetSections).hide();
      $(".registerNewAddress").hide();
      $(".address-info, .currentAddress").show();
    }) : address()
  });
  $('body').on('click', '.manage', function(){
    console.log('wtf')
    $(".options", this).toggle();
  })
  $('body').on('click', '.delete_this', function(){
    delete_address($(this).attr('id')).then(x => restartAddress())
  })
});
