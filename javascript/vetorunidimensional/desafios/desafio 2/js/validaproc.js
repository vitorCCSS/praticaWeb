function validaProc()
{ 
    let i;
    let numero=[];
    let resposta;
    let continuar;
    
    
    for(i = 0; i<11; i++)
    {
        numero[i]=parseInt(prompt("Digite o "+ i + " numero: "));
        console.log(" Numero " + numero[i] + " na posição " + i );
    }

    console.log("\n")

    do
    {
        resposta=parseInt(prompt("Digite um numero "));
        
        for(i = 0; i<11; i++)
        {
            if(resposta == numero[i])
            {
                console.log(" O numero " + resposta + " foi encontrado na posição " + i );
            }

        }
        continuar=parseInt(prompt("Deseja continuar? (1) SIM (2) NÂO "));

    }while(continuar == 1 )

    console.log("Programa finalizado!")
    
    return false;
}