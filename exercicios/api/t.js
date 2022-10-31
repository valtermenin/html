pesquisarCep()

function pesquisarCep() {
    
    const cep = "04261-120"
    const url = `https://viacep.com.br/ws/${cep}/json/`;
        let dados =  fetch(url);
        const endereco =  dados.json();
        if (endereco.hasOwnProperty('erro')){
            console.log("erro")
        }else {
            preencherFormulario(endereco);
        }
}

const preencherFormulario = (endereco) =>{
   // document.getElementById('endereco').value = endereco.logradouro;
   console.log(endereco.logradouro)
 //  document.getElementById('bairro').value = endereco.bairro;
  //  document.getElementById('cidade').value = endereco.localidade;
  //  document.getElementById('estado').value = endereco.uf;
}




