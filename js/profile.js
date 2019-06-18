const addressListPopulatorProfile = async (arrayOfAddresses) => {
  if(!isUserLogged()) return
  $('#add_holder').html('')
  console.log('happening', arrayOfAddresses)
  arrayOfAddresses.forEach(address => {
      console.log(address)
      $('#add_holder').append(address_dom(address))
  })
}


$(async function(){
  const user_profile = await (await get_profile()).json()
  addressListPopulatorProfile(user_profile.addresses)
})