const clearRegisterFields = (callback) => {
    $('#c-name').val('')
    $('#c-email').val('')
    $('#c-password').val('')
    callback && callback()
}

const clearUserFields = (callback) => {
    $('#name').val('')
    $('#password').val('')
    callback && callback()
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

const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const jwt = localStorage.getItem(`jwt`)
    $('.profile .status').html('Perfil')
    if(!user || !jwt){
        $(".profile").click(function(){
            $(ResetModal).hide();
            $(".darkFrame, .login").show();
        })
        return
    }
    $(".profile").click(() => {
        window.location.href = `profile`
    })
}
const isUserLogged = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    const jwt = localStorage.getItem(`jwt`)
    return user || jwt ? true : false
}
const userLogin = async (username, password) => {
    handleLoading()
    const signIn = await login(username, password).catch(x => console.log(x))
    if(signIn.status != 200 || !signIn) return error_modal(handleLoading, 'Erro na autenticação, email ou senha incorretos!')
    const signedIn = await signIn.json()
    
    localStorage.setItem('jwt', signedIn.jwt)
    localStorage.setItem('user', JSON.stringify(signedIn.user))
    handleLogin()
    success_modal(() => {
        handleLoading()
        clearUserFields(() => document.location.reload)
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