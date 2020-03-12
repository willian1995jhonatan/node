maiuscula = (nome,sobrenome) =>{

   return nome.toUpperCase()+" "+sobrenome.toUpperCase()
}

minuscula = (nome,sobrenome) =>{

   return nome.toLowerCase()+" "+sobrenome.toLowerCase()
}

totalLetras = (nome,sobrenome) => {
    
    return nome.length + " " + sobrenome.length
}

//Para que essas funções fiquem acessíveis,vamos exportar essas funcoes

//comando node

// ou exports 
module.exports = {
    maiuscula,
    minuscula,
    totalLetras
}
