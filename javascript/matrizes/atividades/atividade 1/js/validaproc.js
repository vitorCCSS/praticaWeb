function validaProc()
{ 
    let matriz=[];
    let linhas=3;
    let colunas=3;
    let valorX;
    let resultado=[];

    valorX=parseInt(prompt("Digite um valor que será multiplicado na matriz:"));
    
    //Alimentar a matriz
    for(i = 0; i< linhas; i++)
    {
        matriz[i]=[]
        for(c = 0; c < colunas; c++)
        {
            matriz[i][c]= parseInt(prompt("Digite o valor da linha "+ i +" e coluna "+ c ));
        }
    }

    for(i = 0; i< linhas; i++)
        {
            resultado[i]=[]
            for(c = 0; c < colunas; c++)
            {
                resultado[i][c] = matriz[i][c] * valorX
            }
        }

    //Imprimindo os dados da matriz
    for(i = 0; i < linhas; i++)
    {
        for(c = 0; c < colunas; c++)
        {
            document.write(resultado[i][c]+"&nbsp&nbsp");
        }
        document.write("<br>");
    }

    return false;
}