function validaProc()
{ 
    let matriz=[];
    let linhas=3;
    let colunas=3;
    
    //Alimentar a matriz

    for(i = 0; i< linhas; i++)
    {
        matriz[i]=[]
        for(c = 0; c < colunas; c++)
        {
            matriz[i][c]= parseInt(prompt("Digite o valor da linha "+ i +" e coluna "+ c ));
        }
    }

    //Imprimindo os dados da matriz

    for(i = 0; i < linhas; i++)
    {
        for(c = 0; c < colunas; c++)
        {
            document.write(matriz[i][c]+"&nbsp&nbsp");
        }
        document.write("<br>");
    }

    return false;
}