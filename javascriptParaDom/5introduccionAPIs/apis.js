// -- -- -- Geolocalización -- -- --
const geolocation = document.getElementById('ubicacion')

const showPostion = position => {
    geolocation.innerHTML = 'La latitud es: ' + position.coords.latitude + '<br>la longitud es:' + position.coords.longitude;
}

const getLocation = () => {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPostion)
    }else{
        geolocation.innerHTML = 'La geolocalizacion esta apagada o no es soportada por el navegador'
    }
}

// -- -- -- Form Validation -- -- --
const doValidation = () => {
    const number = document.getElementById('number');
    document.getElementById('error').innerHTML = number.checkValidity() ? 'El número esta correcto' : number.validationMessage
}

// -- -- -- History API -- -- -- 
const goBackx2 = () => window.history.go(-2) // Va 2 veces hacia atrás
const goBack = () => window.history.back() // Hacia atrás 1 vez
const goForward = () => window.history.forward() // Hacia adelante 1 vez
const goForwardx2 = () => window.history.go(+2) // Va 2 veces hacia adelante