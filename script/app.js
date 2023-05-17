//Funções gerais da app

//Pesquisa de receitas por input na lista geral de receitas
function pesquisa() {

  var input, filter, cards, cardContainer, h3, title, i;
  input = document.getElementById("pesquisa");
  filter = input.value.toUpperCase();
  cardContainer = document.getElementById("listaReceitas");
  cards = cardContainer.getElementsByClassName("card");
  for (i = 0; i < cards.length; i++) {
      title = cards[i].querySelector(".card-body h3.card-title");
      if (title.innerText.toUpperCase().indexOf(filter) > -1) {
          cards[i].style.display = "";
      } else {
          cards[i].style.display = "none";
      }
  }
}

//Utilizar tecla "Enter" do teclado para adicionar ingredientes
var inputIngrediente = document.getElementById("inputIngrediente");

inputIngrediente.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        // Cancelar a ação default
        event.preventDefault();
        // Acionar o botão com simulação de clique
        document.getElementById("btn-addIngr").click();
    }
});

//Utilizar tecla "Enter" do teclado para adicionar alergias
var inputAlergia = document.getElementById("inputAlergia");

inputAlergia.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        // Cancelar a ação default
        event.preventDefault();
        // Acionar o botão com simulação de clique
        document.getElementById("btn-addAlerg").click();
    }
});


//Gerar um novo ingrediente
function novoIngrediente() {

    // Ir buscar o input do ingrediente
    var textoIngrediente = document.getElementById("inputIngrediente").value;

    //Alertar caso não exista input
    if (textoIngrediente.trim() === "") {
        alert("Primeiro deve escrever um ingrediente");
        return;
    }

    // Criar novo botão com ingrediente introduzido
    var botao = document.createElement("button");
    botao.className = "btn btn-primary rounded-3 my-2 me-2";
    botao.innerText = textoIngrediente;

    // Juntar botão ao container com os botões criados
    document.getElementById("listaIngredientes").appendChild(botao);
    document.getElementById("inputIngrediente").value = "";

    //Atualizar contador ingredientes
    atualizarNumIngredientes();
  }


//Limpar lista ingredientes
function limparIngredientes() {
    var lista = document.getElementById("listaIngredientes");
    lista.innerHTML = "";
    document.getElementById("inputIngrediente").value = "";

    //Atualizar contador ingredientes
    atualizarNumIngredientes();
}

//Gerar uma nova alergia
function novaAlergia() {
    // Ir buscar o input da alergia
    var textoAlergia = document.getElementById("inputAlergia").value;

    //Alertar caso não exista input
    if (textoAlergia.trim() === "") {
        alert("Primeiro deve escrever uma alergia");
        return;
      }

    // Criar novo botão com alergia introduzida
    var botaoAlergia = document.createElement("button");
    botaoAlergia.className = "btn btn-primary rounded-3 my-2 me-2";
    botaoAlergia.innerText = textoAlergia;

    // Juntar botão ao container com os botões criados
    document.getElementById("listaAlergias").appendChild(botaoAlergia);
    document.getElementById("inputAlergia").value = "";

    //atualizar contador alergias
    atualizarNumAlergias();
  }

//Limpar lista ingredientes
function limparAlergias() {
    var listaAlergias = document.getElementById("listaAlergias");
    listaAlergias.innerHTML = "";
    document.getElementById("inputAlergia").value = "";

    //atualizar contador alergias
    atualizarNumAlergias();
}

//Contador Ingredientes
function atualizarNumIngredientes() {
    var listaIngredientes = document.getElementById('listaIngredientes');
    var contagem = listaIngredientes.childElementCount;

    document.getElementById('contagemIngredientes').innerText = contagem;
  }

//Contador Alergias
function atualizarNumAlergias() {
    var listaAlergias = document.getElementById('listaAlergias');
    var contagem = listaAlergias.childElementCount;

    document.getElementById('contagemAlergias').innerText = contagem;
  }

//Mostrar lista principal de receitas
function mostrarListaReceitas() {

    var div = document.getElementById("listaReceitas");
    
    receitas.forEach(element => {
      
      var col = document.createElement("div");
      col.className = "col-lg-4 my-3 recipe-card";
      col.setAttribute('data-id' , element.Id);

      div.append(col);

      var card = document.createElement("div");
      card.className = "card rounded-4 h-100";

      col.append(card);

      var foto = document.createElement("img");
      foto.src = element.Foto;
      foto.className = "card-img-top recipe-thumbnail rounded-4";

      card.append(foto);

      var card_body = document.createElement("div");
      card_body.className = "card-body";

      card.append(card_body);

      var titulo = document.createElement("h3");
      titulo.className = "card-title";
      titulo.innerText = element.Nome;

      card_body.append(titulo);

      var nivel = document.createElement("h6");
      nivel.innerText = element.Nivel;

      card_body.append(nivel);
      
      var iconeNivel = document.createElement("img");
      iconeNivel.src = "images/icons/level.svg";
      iconeNivel.className = "small-icon green-filter me-2";

      nivel.prepend(iconeNivel);

      var tempo = document.createElement("h6");
      tempo.innerText = element.Tempo;

      card_body.append(tempo);

      var iconeTempo = document.createElement("img");
      iconeTempo.src = "images/icons/time.svg";
      iconeTempo.className = "small-icon green-filter me-2";

      tempo.prepend(iconeTempo);

      var pessoas = document.createElement("h6");
      pessoas.innerText = element.Quant;

      card_body.append(pessoas);

      var iconePessoas = document.createElement("img");
      iconePessoas.src = "images/icons/bowl.svg";
      iconePessoas.className = "small-icon green-filter me-2";

      pessoas.prepend(iconePessoas);

      var botoes = document.createElement("div");
      botoes.className = "d-grid gap-2";

      card_body.append(botoes);

      var ver_receita = document.createElement("a");
      ver_receita.className = "btn btn-primary";
      ver_receita.role = "button";
      ver_receita.href= element.Url;
      ver_receita.innerText = "Ver Receita Completa"

      botoes.append(ver_receita);

    })
}

