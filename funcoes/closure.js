 //Closure é o escopo criado quando uma função é declarada
 // Esse  escopo permite a função acesssar e manipular variáveis externas à função

 //Contexto léxico em ação

 const x = 'Mundial'

 function fora() {
     const x = 'Internacional'

     function dentro (){
         return x
     }
     return dentro
 }

 const minhaFuncao = fora()

 console.log(minhaFuncao())