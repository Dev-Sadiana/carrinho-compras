let valorTotal;
limpar();

function adicionar() {
    //recuperar os valores nome do produto, quantidade e valor
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    //verifica se o nome do produto foi selecionado corretamente
    if (!produto || produto.trim == '') {
      alert('Selecione um produto válido!');
      return;
      
    //verifica se o campo quantidade foi preenchido corretamente
    } else if (quantidade <= 0 || isNaN(quantidade)) {
      alert('Informe uma quantidade válida!');
      return;
    }

    //calcular o preço subtotal
    let subtotal = quantidade * valorProduto;

    //adicionar no carrinho
    let listaDeProdutos = document.getElementById('lista-produtos');
    listaDeProdutos.innerHTML = listaDeProdutos.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul">R$ ${subtotal} </span> </section>`;

    //atualizar o valor total
    valorTotal = valorTotal + subtotal;
    let carrinhoTotal = document.getElementById('valor-total');
    carrinhoTotal.textContent = `R$ ${valorTotal}`;
    document.getElementById('quantidade').value = 0;

}

function limpar() {
  valorTotal = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0';
}