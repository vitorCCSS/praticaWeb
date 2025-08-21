function validaProc()
{ 
    // 1. Inicialização da Matriz
    // Declara a variável 'matriz' que será nosso array principal (que conterá as linhas).
    let matriz = [];

    // Define as dimensões da matriz para facilitar a leitura do código.
    const totalLinhas = 2;
    const totalColunas = 5;

    // 2. Laço de Repetição para as Linhas
    // Inicia um laço de repetição externo que será executado para cada LINHA da matriz (de 0 a 1).
    for (let i = 0; i < totalLinhas; i++) 
    {

        // Cria um array vazio temporário para armazenar os elementos da linha atual.
        let linha = [];

        // 3. Laço de Repetição para as Colunas
        // Inicia um laço interno que será executado para cada COLUNA da linha atual (de 0 a 4).
        for (let j = 0; j < totalColunas; j++) 
        {
        
            // Pede ao usuário para digitar um valor, indicando a posição [linha][coluna].
            // Usamos `i + 1` e `j + 1` para que a visualização seja mais intuitiva para o usuário (começando em 1).
            let valor = prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]:`);
            
            // Converte o valor digitado (que é texto) para um número e o adiciona ao array 'linha'.
            linha.push(parseFloat(valor));
        }
    
        // Adiciona o array 'linha' (agora preenchido) como um novo elemento da 'matriz'.
        matriz.push(linha);
    }


    // 4. Exibição do Resultado
    // Exibe um título no console do navegador.
    console.log("A matriz resultante é:");

    // Utiliza o 'console.table()' que é uma forma excelente de visualizar arrays de duas dimensões de forma organizada.
    console.table(matriz);

    // Opcional: Mostra o resultado em um alerta, formatando a saída para melhor leitura.
    let matrizFormatada = "";
    for (let i = 0; i < totalLinhas; i++) 
    {
        matrizFormatada += `[${matriz[i].join(", ")}]\n`; // \n cria uma nova linha no alerta
    }
    alert("Matriz criada:\n" + matrizFormatada);

    return false;
}