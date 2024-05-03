function validarContraseña(contraseña) {
    const longitudMinima = 8;
    
    const caracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    
    const letrasMayusculas = /[A-Z]/;
    const letrasMinusculas = /[a-z]/;
    const numeros = /[0-9]/;
    
    if (contraseña.length < longitudMinima) {
        return false;
    }
    
    if (!caracteresEspeciales.test(contraseña)) {
        return false;
    }
    
    if (!letrasMayusculas.test(contraseña)) {
        return false;
    }
    
    if (!letrasMinusculas.test(contraseña)) {
        return false;
    }
    
    if (!numeros.test(contraseña)) {
        return false;
    }
    
    return true;
}

const contraseña = "P@ssw0rd";
if (validarContraseña(contraseña)) {
    console.log("La contraseña es válida.");
} else {
    console.log("La contraseña no cumple con los criterios de validez.");
}
