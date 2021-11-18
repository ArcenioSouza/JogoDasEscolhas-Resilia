function iniciarJogo() {
  return location = ("./tela-escolha/index.html");
}

function escolhaPersonagem(number) {
  if (number == 1) {
    return location = ("../historia-harry/index.html");
  } else if (number == 2) {
    return location = ("../historia-draco/index.html");
  } else {
    return location = ("../historia-voldemort/index.html");
  }
}

function voltar(){
  return location = ("./index.html")
}


function opcoesJogo(personagem, fase, opcao){
   if(personagem == 'harry'){
      
      if(fase == 0){
         opcao = prompt("Digite a opção:\n1 para sim\n2 para não")

         if(opcao == 1){
            return location = ("./Fase1.html")
         }else {
            return location = ("../tela-escolha/index.html")
         }
      }else if(fase == 1){
        opcao = prompt("Digite o número que corresponde a sua resposta:\n1 para 1980\n2 para 1982")

         if(opcao == 1){
            return location = ("./Fase2.html")
         }else {
            return location = ("../gameOver.html")
         }

      }else if(fase == 2){
        opcao = prompt("Digite o número que corresponde a sua resposta:\n1 para Lily \n2 para Petúnia")

         if(opcao == 1){
            return location = ("../gameOver.html")
         }else {            
            return location = ("./Fase3.html")
         }
         
      }else if(fase == 3){
        opcao = prompt("Digite o número que corresponde a sua resposta:\n1 para Atacante \n2 para Apanhador")

         if(opcao == 1){
            return location = ("../gameOver.html")
         }else {            
            return location = ("./Fase4.html")
         }

      }else if(fase == 4){
        opcao = prompt("Digite o número que corresponde a sua resposta:\n1 para Tom Riddle \n2 para Principe Mestiço")

        if(opcao == 1){
          return location = ("./Fase5.html")           
        }else {            
          return location = ("../gameOver.html")
        }
   }else{
      opcao = prompt("Digite o número que corresponde a sua resposta:\n1 para Sirius Black \n2 Alastor Moody")

      if(opcao == 1){
        return location = ("../vitoria.html")        
      }else {            
        return location = ("../gameOver.html")
      }
   }

   }else if(personagem == draco){

   }else{

   }
}
