/*
  Os atributos nomes, idade e especie são todos necessários. Assim, usando Try e Catch trate os erros e apresente uma 
  mensagem de erro quando houve atributos vazios.
*/
class MeuError extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  } 
  
  class Animal {
    constructor(nome, idade, especie) {
      this.nome = nome;
      this.idade = idade;
      this.especie = especie;
    }
  
    mostrarAtributos(){
      try{
        return this.atributos();
    }catch(erro){
    return erro
    }
    } 
  
    atributos() {
      if(this.nome != "" && this.idade != "" && this.especie != ""){
        return this.nome + this.idade + this.especie
    }
    else{
  throw new MeuError("Ta errado, ta faltando nome ou sobrenome")
    }
  }
    
  
  }
  
  const meuAnimal = new Animal("", 3, "cachorro");
  console.log(meuAnimal.mostrarAtributos());
  
  /* Imprimindo os atributos
  console.log(atributos.nome);   
  console.log(atributos.idade);  
  console.log(atributos.especie); 
  */
  