class Atleta{
  constructor(nome,idade,peso,altura,notas){
    this.nome = nome
    this.idade = idade
    this.peso = peso
    this.altura = altura
    this.notas = notas
  }
  
  calcularCategoria(){
    if (this.idade >= 9,this.idade <=11){
      return "infantil"
    }
    else if (this.idade >= 12,this.idade <= 13){
      return "Juvenil"
    }
    else if (this.idade >= 14,this.idade<=15){
      return "Intermediario"
    }
    else if (this.idade >= 16,this.idade<=30){
      return "adulto"
    }
    else {
      return "sem categoria"
    }
  }
  calcularIMC(){
    return this.peso/(this.altura * this.altura)
  }
  calcularMediaValida(){
    let soma = 0
    this.notas.sort((a,b) => a - b)
    let notasComputadas = this.notas.slice(1,4)
    notasComputadas.forEach(function(n){
      soma = soma + n
    })
    return soma/notasComputadas.length
  }
  obtemNomeAtleta(){
    return this.nome
  }
  obtemIdadeAtleta(){
    return this.idade
  }
  obtemPesoAtleta(){
    return this.peso
  }
  obtemAlturaAtleta(){
    return this.altura
  }
  obtemNotasAtleta(){
    return this.notas
  }
  obtemCategoria(){
    return this.calcularCategoria()
  }
  obtemIMC(){
    return this.calcularIMC()
  }
  obtemMediaValida(){
    return this.calcularMediaValida()
  }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(`Nome: ${atleta.obtemNomeAtleta()}`);
console.log(`Idade: ${atleta.obtemIdadeAtleta()}`);
console.log(`Peso: ${atleta.obtemPesoAtleta()}`);
console.log(`Altura: ${atleta.altura}`);
console.log(`Notas: ${atleta.obtemNotasAtleta().join(",")}`);
console.log(`Categoria: ${atleta.obtemCategoria()}`);
console.log(`IMC: ${atleta.obtemIMC()}`);
console.log(`Média válida: ${atleta.obtemMediaValida()}`)