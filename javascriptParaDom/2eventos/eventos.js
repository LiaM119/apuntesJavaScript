// -- -- -- Eventos -- -- --
//STRING
const changeThisElement = element => element.innerHTML = 'Hola mundo desde función de flecha'

// FECHA DE HOY
const displayDate = () => document.getElementById('test').innerHTML = Date()

document.getElementById('btn').onclick = displayDate // No se abren parentesis para que se ejecute cuando sea la acción

//Habilitar cookies
const checkCookies = () => {
    let text = navigator.cookieEnabled ? 'Las cookies estan habilitadas' : 'Las cookies no estan habilitadas'
    document.getElementById ('test').innerHTML = text
}
