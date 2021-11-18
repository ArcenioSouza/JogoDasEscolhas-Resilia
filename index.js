function iniciarJogo() {
  return location("./tela-escolha/index.html");
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



function opcoesJogo(personagem, fase, opcao){
   if(personagem == 'harry'){
      
      if(fase == 0){
         opcao = prompt("digite:\n1 para sim\n2 para não")

         if(opcao == 1){
            return location = ("./Fase1.html")
         }else {
            return location = ("../tela-escolha/index.html")
         }
      }else if(fase == 1){

      }else if(fase == 2){
         
      }else if(fase == 3){

      }else if(fase == 4){

   }else{

   }

   }else if(personagem == draco){

   }else{

   }
}
