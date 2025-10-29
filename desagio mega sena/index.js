function randomNumber(numero) {
    if (numero < 6 && numero > 9) {
        console.log("não é possível usar esse número")
        return arraySena
    }

    const arraySena = []

    
    while (arraySena.length < numero) {
        const randomNumber = Math.floor(Math.random() * 60) + 1
        if (!arraySena.includes(randomNumber)) {
            arraySena.push(randomNumber)
        }
    }

    return console.log(arraySena)
}

randomNumber(7)

