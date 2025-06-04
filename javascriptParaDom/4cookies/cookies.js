// -- -- -- Cookies -- -- --
document.cookie = 'username=Liam Romero'

const user1 = document.cookie
confirm(`¿Este es su nombre de usuario? ${user1}`)

// Decodificar una cookie 

const user = getCookie('username')

function getCookie(cname) {
    let name = cname + "="; 
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';'); 
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return  c.substring(name.length, c.length); 
        }
    }
    return "";
}

confirm(`¿Este es su nombre de usuario? ${user}`)