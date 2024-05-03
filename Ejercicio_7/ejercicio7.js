function esPalindromo(palabra) {
    return palabra === palabra.split('').reverse().join('');
}

console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("radar")); // true
console.log(esPalindromo("oso")); // true
console.log(esPalindromo("ana")); // true
console.log(esPalindromo("hola")); // false
console.log(esPalindromo("javascript")); // false
