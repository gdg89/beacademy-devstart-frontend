/*
Variaveis

- Nome, identificaçaõ ou apelido dado para algum valor
- Utiliza espaços da memoria ram armazenar informações
- Esses valores podem variar de acordo com o tempo ou   podem ser constantes.

- Palavras reservadas para contruir uma variavel:

    --> var -
        variavel que pode sofrer mudanças de valor ao logo do codigo.

    --> let -
        variavel que pode sofrer mudanças de valor ao logo do codigo, geralmente usado dentro de um escopo (Bloco de codigo).
        
    --> const
        variavel constante, não pode receber oturo valor, seu valor é fixo em todo o codigo.


*/
// TESTE DE DECLARAÇÕES

     var name
     let name2
     const name3// nao e posivel so declarar, é preciso atribuir um valor tambem.

     //Declarar

      /*  JS -->    Variaveis fracamente tipadas e dinamicas. Ou seja, es variaves podem sofrer mudanças no recorrer do codigo. 
      */

      let name = "luan"
      console.log(name)

      name = 32
      console.log(name)

      name = "monteiro"

      //----------------

      const coisas = carro
      console.log(coisas)

      coisas = bike // dara error, const nao pode mudar o valor.

      /*  Variaves fortemente tipadas tem um tipo bem definido e que precisa ser informado no momento de sua declaração.  
        ex: var mane:Strgin = "Luan"
        */

    // Globais - são de escopo total:

        //Efeito Hoisting --> é realizado somente poelo var, 
        console.log('Variavel name existe aqui?', name)

        {// Scopo(bloco de codigo)
            //local
            var name = "Giuliano"
        }
       console.log('Variavel name existe aqui?', name)



    // Locais - de Scopo.

    let maquina = 1235
    console.log('a variavel chegou ate aqui?', maquina)  
    {
       let maquina = 846
      console.log('a variavel chegou ate aqui?', maquina)  
    }

    console.log('a variavel chegou ate aqui?', maquina)  



// Objetos


 const human ={
     nome: "giuliano",
     age: 30,
     weigh: 90,
     isAthlete: true
     walk: function{
         console.log('Eu ando bastante')
     }
 }

 console.log(human.age )
 console.log(human.name )
 console.log(human.walk())

 //concatenar
 console.log("O human" + human.name + "tem a idade" + human.age )
 //interpolar
 console.log(`O  humano ${human.name} tem a idade ${human.age}`)

 //Array
 const animas= [
    "mono",//0
    "perro",//1
    "elefante",//2
    "leon",//3
    "gato",//4
    {//5
        name:"aksdbak",
        age:2,
        weigh:4
    }
        
    ]
 console.log(animas.length)
 console.log(animas[5].name)