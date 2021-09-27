var lista = []

function addItemLista(event) { // o objeto *event* está pelo formulário no html
  event.preventDefault(); // isso serve para não atualizar após submeter um formulário
  var valorItem = document.getElementById('novo_item').value;
  var novoItem = {
    marcado: false,
    valor: valorItem
  }

  lista.push(novoItem) //adicionando este item na lista
  limparItem() //limpar o input no html
  atualizaListaHtml(lista)
}

function limparItem() {
  document.getElementById('novo_item').value = ""
}

function removerItem(valor) {
  lista = lista.filter(function (item) {
    return item.valor !== valor // o valor do item é diferente do paramêtro da função
  })
  atualizaListaHtml(lista)
}

function filtrarMarcados() {
  var lista_marcados = lista.filter(function (item) {
    return item.marcado == true
  })
  atualizaListaHtml(lista_marcados)
}

function filtrarNaoMarcados() {
  var lista_nao_marcados = lista.filter(function (item) {
    return item.marcado == false
  })
  atualizaListaHtml(lista_nao_marcados)
}

function mostrarTodos() {
  atualizaListaHtml(lista)
}

function marcarOuDesmarcarItem(valor) {
  lista = lista.map(function (item) {
    if (item.valor == valor) {
      item.marcado = !item.marcado
      return item
    }
    return item
  })
  atualizaListaHtml(lista)
}

function atualizaListaHtml(lista) {
  var grupoLista = document.createDocumentFragment()
  lista.forEach(item => {
    var li = document.createElement('li')
    var checked = item.marcado ? 'checked' : ''
    var div = `<div><input type="checkbox" onclick="marcarOuDesmarcarItem('${item.valor}')" ${checked}/><span>${item.valor}</span></div>`
    var button = `<button onclick="removerItem('${item.valor}')"><img src="img/trash.png" height="14" alt=""></button>`
    li.innerHTML = div + button
    li.className = 'lista_item'
    grupoLista.appendChild(li)
  });
   document.getElementById('lista_de_itens').innerHTML = ''
   document.getElementById('lista_de_itens').appendChild(grupoLista)
}