const clearRegisterFields = () => {
    $('#c-name').val('')
    $('#c-email').val('')
    $('#c-password').val('')
}

const clearUserFields = () => {
    $('#name').val('')
    $('#password').val('')
}

const userRegister = async (username, password, email, name) => {
    handleLoading()
    const register = await register_user(username, password, email, name).catch(x => console.log(x))
    if(register.status != 200 || !register) return error_modal(handleLoading, 'Erro no cadastro, existem campos não preenchidos!')
    success_modal(() => {
        handleLoading()
        openLogin()
        clearRegisterFields()
    })
}
const userLogin = async (username, password) => {
    handleLoading()

    const signIn = await login(username, password).catch(x => console.log(x))
    if(signIn.status != 200 || !signIn) return error_modal(handleLoading, 'Erro na autenticação, email ou senha incorretos!')
    const signedIn = await signIn.json()
    localStorage.setItem('jwt', signedIn.jwt)
    success_modal(() => {
        handleLoading()
        clearUserFields()
        closeModal()
    })
}

$(function(){
    $(`.ConfirmSignUp`).on(`click`, function(){
        console.log(`ow`)
        const name = $('#c-name').val()
        const [email, username] = [$('#c-email').val(), $('#c-email').val()]
        const password = $('#c-password').val()
        userRegister(username, password, email, name)
    })
    $('.confirmLogin').on('click', function(){
        console.log('hhee')
        userLogin($('#username').val(), $('#password').val())
    })
})