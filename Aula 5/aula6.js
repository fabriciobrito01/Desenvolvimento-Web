const meuArray = [1, 2, 3]

const meuObjeto = {
    nome: "Uma propriedade.",
    numero: 10,
    endereço: {
        rua: "Rua A",
        numero: 10
    }
}

function soma (a, b) {
return a + b;
}

const anonima = function (a, b) {
    return a + b;
}

const arrow = (a, b) => {
    return a + b;
}

const arrow2 = (a, b) => a + b;

const arrow3 = a => a + 1;

const dobro = elemento => (console.log(elemento * 2));