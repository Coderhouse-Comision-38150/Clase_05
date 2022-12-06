function* genAleatorio(min, max) {
    let cont = 0

    while(true) {
        let numero = parseInt((Math.random()*max)) + min
        yield { orden: ++cont, numero, fyh: new Date().toLocaleString() }
    }
}

var getAleatorio = genAleatorio(1,20)
setInterval(() => {
    console.log(getAleatorio.next().value)
},1000)

