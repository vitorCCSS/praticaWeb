function validaProc()
{ 
    let matriz=[];
    let linhas=4;
    let colunas=4;

    //Alimentar a matriz
    for(i = 0; i< linhas; i++)
    {
        matriz[i]=[]
        for(c = 0; c < colunas; c++)
        {
            matriz[i][c]= parseInt(prompt("Digite o valor da "+ (i+1) +"º linha e "+ (c+1) +"º coluna"));
        }
    }

    document.write("<h3> Matriz <h3>");
    for(i = 0; i< linhas; i++)
    {
        for(c = 0; c < colunas; c++)
        {
            document.write(matriz[i][c]+"&nbsp&nbsp");
        }
        document.write("<br>");
    }
    
    document.write("<br>");
    document.write("<br>");
    
    document.write("<h3> Diagonal Principal <h3>");
    for(i = 0; i< linhas; i++)
    {
        document.write(matriz[i][i] +" ");  
    }

    document.write("<br>");
    document.write("<br>");

    document.write("<h3> Diagonal Secundaria <h3>");
    for(i = 0; i< linhas; i++)
    {
        document.write(matriz[i][3-i] +" ");
    }
    
    return false;
}