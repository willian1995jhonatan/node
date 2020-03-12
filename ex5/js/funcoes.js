var n1= 0, n2=0

function soma(){
    return n1+n2
}

function subtrai(){
    return n1-n2
}

function multiplicacao(){
    return n1*n2
}

function divisao(){
    if (n2!=0){
    return n1/n2
    }
    else {
        return "Impossível dividir por 0"
    }
}



module.exports = {
soma,
subtrai,
multiplicacao,
divisao
}