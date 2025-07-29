# 🏋️‍♂️ Projeto: Avaliação de Atletas com Classe em JavaScript

Este projeto é uma evolução do primeiro desafio. Agora, foi implementada uma **classe JavaScript** chamada `Atleta`, com atributos e métodos específicos para calcular **categoria**, **IMC**, **média válida das notas** e retornar todas as informações relevantes do atleta.

---

## 🧠 Objetivo

Criar um software que:

- Armazene os dados dos atletas usando orientação a objetos
- Calcule a **categoria** baseada na idade
- Calcule o **IMC** do atleta
- Calcule a **média válida** das notas (descartando a maior e a menor)
- Apresente os dados de forma organizada no console

---

## 🧱 Estrutura da Classe

### 🔸 Atributos:

- `nome` (string)
- `idade` (número)
- `peso` (número)
- `altura` (número)
- `notas` (array de números)

### 🔹 Métodos:

- `calculaCategoria()`
- `calculaIMC()`
- `calculaMediaValida()`
- `obtemNomeAtleta()`
- `obtemIdadeAtleta()`
- `obtemAlturaAtleta()`
- `obtemPesoAtleta()`
- `obtemNotasAtleta()`
- `obtemCategoria()`
- `obtemIMC()`
- `obtemMediaValida()`

---

## 🧮 Lógicas utilizadas

### ✅ Cálculo da Categoria:

| Faixa Etária | Categoria       |
|--------------|------------------|
| 9 a 11 anos  | Infantil          |
| 12 a 13 anos | Juvenil           |
| 14 a 15 anos | Intermediário     |
| 16 a 30 anos | Adulto            |
| Outros       | Sem categoria     |

### ✅ Fórmula do IMC:

**IMC = peso / (altura * altura)**

### ✅ Cálculo da Média Válida:

- Ordenar as 5 notas
- Remover a menor e a maior
- Calcular a média das 3 notas centrais

---

## 📊 Exemplo de Uso

```javascript
const atleta = new Atleta(
  "Cesar Abascal",
  30,
  80,
  1.70,
  [10, 9.34, 8.42, 10, 7.88]
);
```

## ✅ Saída Esperada
```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: Adulto
IMC: 27.68166089965398
Média válida: 9.25333333
```
## Resultado
```
Nome: Cesar Abascal
Idade: 30
Peso: 80
Altura: 1.7
Notas: 10,9.34,8.42,10,7.88
Categoria: adulto
IMC: 27.68166089965398
Média válida: 9.253333333333332
```

## 👨‍💻 Autor
Desenvolvido por Yuri Fernando da Cruz

GitHub
