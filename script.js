//cancelar envio do formulario

const form = document.getElementById('some-form');
form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log('Deu certo');
});

class Heroi {
  nome;
  idade;
  tipo;
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  
  tipoAtaque(){
     //Metodo que verifica ataque do Heroi
     if(this.tipo == "Mago"){
        return  "MAGIA";
     }else if(this.tipo == "Guerreiro"){
         return  "ESPADA";
     }else if(this.tipo  == "Monge"){
         return "ARTES MARCIAIS";
     }else if(this.tipo  == "Ninja"){
        return "Shuriken";
     }
  }
    
  get atacar(){
    return `${this.tipo} atacou seu Inimigo`;
  }
  
}


function hiddenNome(){
    var hidden_resultado_nome = document.querySelector('.dados_nome');
    hidden_resultado_nome.classList.remove("dados_nome");
    hidden_resultado_nome.classList.add("remove");
}

function showIdade(){
    var show_resultado = document.querySelector('.dados_idade');
    show_resultado.classList.remove('dados_idade');
    show_resultado.classList.add("show");
    
    hiddenNome();
}


function hiddenIdade(){
    var hidden_resultado_idade = document.querySelector('.show');
    hidden_resultado_idade.classList.remove("show");
    hidden_resultado_idade.classList.add("remove");
}
  


function showTipo(){
    var show_resultado = document.querySelector('.dados_tipo');
    show_resultado.classList.remove('dados_tipo');
    show_resultado.classList.add("show");
    
    hiddenIdade();
}   


function hiddenTipo(){
    var hidden_resultado_tipo = document.querySelector('.show');
     hidden_resultado_tipo.classList.remove("show");
     hidden_resultado_tipo.classList.add("remove");   
}

function showResultado(){	
  var nome = document.getElementById('nome').value;
  var tipo = document.querySelector('input[name="tipo"]:checked').value;
  var idade = document.getElementById('idade').value;

  var show_tela = document.getElementById('mostra_resultado');

  var show_resultado = document.querySelector('.dados_mostrar');
  // Instancia da class Heroi

  var player = new Heroi(nome,idade,tipo);
  
  show_resultado.classList.remove('dados_mostrar');
  show_resultado.classList.add("show");
  
   show_tela.innerHTML += ` <p> Nome do Heroi: ${player.nome} </p>
                            <p> Idade do Heroi: ${player.idade} Anos</p>
                            <p> ${player.nome} o ${player.atacar} usando ${player.tipoAtaque()}.!!</p>
                            <button onClick="window.location.reload()">Ver novamente</button>
                          `;
                          
  hiddenTipo();

  }

