function validaProc()
{ 
    
    let matriz = [];
    let linhas;
    let colunas;

    for (linhas = 0; linhas < 2; linhas++) 
    {
        matriz[linhas] = []; 
        for ( colunas = 0; colunas < 2; colunas++) 
        {
            matriz[linhas][colunas] = linhas + colunas; 
        }
    }

    console.log("Matriz 2x2:");
    console.log(matriz);

    return false;
}