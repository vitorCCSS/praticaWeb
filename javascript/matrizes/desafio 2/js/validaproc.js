function validaProc()
{ 
    let numero=[];
    let linhas=4;
    let colunas=3;
    let somaTotal = 0;
     
    for(i = 0; i< linhas; i++)
    {
        numero[i]=[]
        for(c = 0; c < colunas; c++)
        {
            numero[i][c]= parseInt(prompt("Numero [ "+ (i+1) +" ] [ "+ (c+1) + " ]"));
            console.log("Numero [ "+ (i+1) +" ] [ "+ (c+1) + " ] "+numero[i][c]);
            somaTotal = somaTotal + numero[i][c]
        }
    }

    document.write("Soma total: " +somaTotal);
    document.write("<br>");
   
    return false;
}