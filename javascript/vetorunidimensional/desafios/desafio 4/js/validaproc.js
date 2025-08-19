function validaProc()
{ 
    let i;
    let numero=[];
     
    for(i = 0; i<=4; i++)
    {
        numero[i]=parseInt(prompt("Digite o "+ i + " numero inteiro: "));
        console.log(" Numero " + numero[i] + " na posição " + i );
    }
 
    for(i = 4; i>=0; i--)
    {
            console.log("Numero "+ numero[i] + " na posição " + i);
    }

    console.log("Programa finalizado!")
    
    return false;
}