//  Pegar o primeiro input

const numeroMultiplicado = document.querySelector("#numero-multiplicado");

// Pegar o segundo input

const quantidadeDeVeses = document.querySelector("#quantidade-de-veses");

// pegar o botão
const btnClicar = document.querySelector("#btn-calcular");

// pegar o id do texto para alterar e colocar no numero certo

const textoDoNumero = document.querySelector(".textForTable");

// adicionando a função para o botão

btnClicar.addEventListener("click", () => {
  // Pegar valor dos input
  const numero = Number(numeroMultiplicado.value);
  const quantidade = Number(quantidadeDeVeses.value);

  // Fazer um if para pegar somente números
  if (!isNaN(numero) && !isNaN(quantidade) && numero != 0) {
    // Alterar o texto do elemento h3 com o número correto
    const textoDoNumero = document.querySelector(".textForTable");
    textoDoNumero.textContent = `Tabuada do número: ${numero}`;

    // Criar um elemento de parágrafo para os resultados
    const resultadosElemento = document.querySelector("#resultados");

    // criar uma variavel para armazenar os resultados
    let resultados = "";

    const tittle = document.querySelector("#title")
    if (tittle) {
        tittle.remove()
    }

    for (let i = 1; i <= quantidade; i++) {
      resultados += `${numero} x ${i} = ${numero * i}<br>`;
    }

    // Define o conteúdo do elemento de parágrafo com os resultados
    resultadosElemento.innerHTML = resultados;
  } else if (numero == 0) {
    console.log("Digite um número diferente de 0 por favor");
  } else {
    console.log("Número não identificado");
  }
});
