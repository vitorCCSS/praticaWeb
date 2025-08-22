function validaProc()
{ 
    let matriz=[];
    let linhas=5;
    let colunas=5;
    let matrizDobro=[];

    //Alimentar a matriz
    for(i = 0; i< linhas; i++)
    {
        matriz[i]=[]
        for(c = 0; c < colunas; c++)
        {
            matriz[i][c]= parseInt(prompt("Digite o valor da "+ (i+1) +"º linha e "+ (c+1) +"º coluna"));
        }
    }

    //Multiplicando a matriz original por 2
    for(i = 0; i< linhas; i++)
    {
        matrizDobro[i]=[]
        for(c = 0; c < colunas; c++)
        {
            matrizDobro[i][c] = matriz[i][c] * 2
        }
    }
    
    //Matriz original
    for(i = 0; i < linhas; i++)
    {
        for(c = 0; c < colunas; c++)
        {
            document.write(matriz[i][c]+"&nbsp&nbsp");
        }
        document.write("<br>");
    }


    //Matriz dobrada
    for(i = 0; i < linhas; i++)
    {
        for(c = 0; c < colunas; c++)
        {
            document.write(matrizDobro[i][c]+"&nbsp&nbsp");
        }
        document.write("<br>");
    }

    return false;
}