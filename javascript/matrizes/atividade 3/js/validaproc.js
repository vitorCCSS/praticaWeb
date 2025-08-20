function validaProc()
{ 
    let matriz=[];
    let linhas=2;
    let colunas=2;
    let linhaSoma;
    let resultado;
    
    //Alimentar a matriz
    for(i = 0; i< linhas; i++)
    {
        matriz[i]=[]
        for(c = 0; c < colunas; c++)
        {
            matriz[i][c]= parseInt(prompt("Digite o valor da linha "+ i +" e coluna "+ c ));
        }
    }

    do 
    {
        linhaSoma=parseInt(prompt("Digite o numero da linha que deseja somar:"));
        
    } while (linhaSoma < 0 || linhaSoma > 1);




    linhaSoma=parseInt(prompt("Digite o numero da linha que deseja somar:"));
    if(linhaSoma == i)
    {
        resultado += matriz[i][c]
    }

    else
    {
        prompt(("Informação invalida"));
    }

    document.write(resultado+"&nbsp&nbsp");
    


    return false;
}