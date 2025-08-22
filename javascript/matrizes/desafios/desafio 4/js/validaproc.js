function validaProc()
{ 
    let matriz=[];
    let linhas=4;
    let colunas=5;
    let somaLinha;
    let somaTotal=0;

    //Alimentar a matriz
    for(i = 0; i< linhas; i++)
    {
        matriz[i]=[]
        for(c = 0; c < colunas; c++)
        {
            matriz[i][c]= parseInt(prompt("Digite o valor da "+ (i+1) +"º linha e "+ (c+1) +"º coluna"));
        }
    }

    for(i = 0; i< linhas; i++)
    {
        somaLinha = 0
        for(c = 0; c < colunas; c++)
        {
            somaLinha = somaLinha + matriz[i][c]
            somaTotal = somaTotal + matriz[i][c]
        }
        document.write(" Soma da "+ (i+1) +"º Linha: "+ somaLinha);
        document.write("<br>");
    }
    document.write("<br>");
    document.write("Soma total: "+ somaTotal);

    return false;
}