const { resolve } = require("dns");
const { rejects } = require("assert");
const { questionFloat, questionInt, question } = require("readline-sync");

  function random(max) {
      return Math.random() * max;
    }

  class Usuario {
      constructor (){
          this.nome = question('Digite seu nome: ')
          this.saldo = questionInt('Digite o saldo em seu cartão: ')
          this.carrinho = []
          this.totaldaCompra = 0
          this.endereco = ''
      }  
  }
 

    class Produto {
        constructor(codigo, nome, valor, img, quantidade) {
          this.codigo = codigo
          this.nome = nome
          this.valor = valor
          this.quantidade = quantidade
          this.img = img

        }
      }

      function comprar() {
        mercado.listarProdutos()
        let produtoEscolhido
        let valorTotalDaCompra = 0
               
        while (produtoEscolhido > 0 && produtoEscolhido < 4) {
         
          let produto = mercado.produtos[produtoEscolhido-1]
          
          user.carrinho.push(produto)
          valorTotalDaCompra = valorTotalDaCompra + produto.valor
          saldoDisponivel = (user.saldo - valorTotalDaCompra) 
          
          if (continuar === 1) {
            mercado.listarProdutos()
            produtoEscolhido = ""
          } 
          else {
            user.totaldaCompra = valorTotalDaCompra.toFixed(2)
            break
          }
        }
        console.log('Seu carrinho: \n')
        console.log(user.carrinho)
        passarCartao()
}

function simulateCompra() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            let saldoDisponivel = user.saldo
            let concluir = questionInt('Digite 1 para concluir a compra ou 2 para iniciar uma nova compra: \n')
              if(concluir === 1) {
                entrega()
              } else if(concluir === 2){
                user.limparCarrinho
                comprar()
              } else{
                console.log('1 ou 2')
              }

            if(user.totaldaCompra <= saldoDisponivel){
                resolve('Compra aprovada, OBG ;) e volte sempre!')
                console.log('Saldo restante: ' + (saldoDisponivel - user.totaldaCompra).toFixed(2))
            }else{
                reject('Compra negada')
                console.log(`Saldo insuficiente. (Saldo atual: R$ ${user.saldo} | valor da compra: R$ ${user.totaldaCompra})`) // simulação
            }
        }, 1000)
    })
}
           
 function passarCartao() {
    console.log('Compra em processamento');
    
    simulateCompra()
        .then(res => console.log(res))
        .catch(err => console.log(err)); 
}

