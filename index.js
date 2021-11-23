function iniciarJogo() {
  return (location = "./tela-escolha/index.html");
}

function escolhaPersonagem(number) {
  if (number == 1) {
    return (location = "../historia-harry/index.html");
  } else if (number == 2) {
    return (location = "../historia-draco/index.html");
  } else {
    return (location = "../historia-voldemort/index.html");
  }
}

function voltar() {
  return (location = "./index.html");
}

function opcoesJogo(personagem, fase, opcao) {

  if (personagem == "harry") {
    
    if (fase == 0) {
      opcao = prompt("Digite a opção:\n1 para sim\n2 para não");

      if (opcao == 1) {
        return (location = "./Fase1.html");
      } else {
        return (location = "../tela-escolha/index.html");
      }
    } else if (fase == 1) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para 1980\n2 para 1982"
      );

      if (opcao == 1) {
        return (location = "./Fase2.html");
      } else {
        return (location = "../gameOver.html");
      }

    } else if (fase == 2) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Lily \n2 para Petúnia"
      );

      if (opcao == 1) {
        tenteNovamente()
        alert(`Você ainda tem ${tentativa} tentativas`) 
        if(tentativa != 0){
          return (location = "./Fase2.html");
        }else{}
          return (location = "../gameOver.html");
      } else {
        return (location = "./Fase3.html");
      }

    } else if (fase == 3) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Atacante \n2 para Apanhador"
      );

      if (opcao == 1) {
        return (location = "../gameOver.html");
      } else {
        return (location = "./Fase4.html");
      }
    } else if (fase == 4) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Tom Riddle \n2 para Principe Mestiço"
      );

      if (opcao == 1) {
        return (location = "./Fase5.html");
      } else {
        return (location = "../gameOver.html");
      }
    } else {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Sirius Black \n2 Alastor Moody"
      );

      if (opcao == 1) {
        location = "../vitoria.html";
      } else {
        return (location = "../gameOver.html");
      }
    }

    //draco
  } else if (personagem == "draco") {
    if (fase == 0) {
      opcao = prompt("Digite a opção:\n1 para sim\n2 para não");

      if (opcao == 1) {
        return (location = "./Fase1.html");
      } else {
        return (location = "../tela-escolha/index.html");
      }
    } else if (fase == 1) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Narcisa\n2 para Ninfadora"
      );

      if (opcao == 1) {
        return (location = "./Fase2.html");
      } else {
        return (location = "../gameOver.html");
      }
    } else if (fase == 2) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Neville \n2 para Vicente"
      );

      if (opcao == 1) {
        return (location = "../gameOver.html");
      } else {
        return (location = "./Fase3.html");
      }
    } else if (fase == 3) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 Insultou os pais dele \n2 Conjurou uma cobra"
      );

      if (opcao == 1) {
        return (location = "../gameOver.html");
      } else {
        return (location = "./Fase4.html");
      }
    } else if (fase == 4) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para 50 pontos \n2 para 100 pontos"
      );

      if (opcao == 1) {
        return (location = "./Fase5.html");
      } else {
        return (location = "../gameOver.html");
      }
    } else {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Potter Fede \n2 Criado por trouxas"
      );

      if (opcao == 1) {
        return (location = "../vitoria.html");
      } else {
        return (location = "../gameOver.html");
      }
    }

    //voldemort
  } else if (personagem == "tom") {
    if (fase == 0) {
      opcao = prompt("Digite a opção:\n1 para sim\n2 para não");

      if (opcao == 1) {
        return (location = "./Fase1.html");
      } else {
        return (location = "../tela-escolha/index.html");
      }
    } else if (fase == 1) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Murta Warren\n2 para Luna Lovegood"
      );

      if (opcao == 1) {
        return (location = "./Fase2.html");
      } else {
        return (location = "../gameOver.html");
      }
    } else if (fase == 2) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para 8 partes \n2 para 7 partes"
      );

      if (opcao == 1) {
        return (location = "../gameOver.html");
      } else {
        return (location = "./Fase3.html");
      }
    } else if (fase == 3) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 Sangue de servo fiel  | Cabelo do Harry | Ossos de Tom Riddle \n2 Sangue do Harry | Pedaço de servo fiel | Ossos do Pai"
      );

      if (opcao == 1) {
        return (location = "../gameOver.html");
      } else {
        return (location = "./Fase4.html");
      }
    } else if (fase == 4) {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Expelliarmus \n2 para Imperius"
      );

      if (opcao == 1) {
        return (location = "./Fase5.html");
      } else {
        return (location = "../gameOver.html");
      }
    } else {
      opcao = prompt(
        "Digite o número que corresponde a sua resposta:\n1 para Delphini  \n2 para Belatrix"
      );

      if (opcao == 1) {
        return (location = "../vitoria.html");
      } else {
        return (location = "../gameOver.html");
      }
    }
  }
}
