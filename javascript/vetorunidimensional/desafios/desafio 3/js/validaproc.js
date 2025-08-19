function validaProc()
{ 
    let i;
    let numero=[];
    let valor;
    let resultado=[];
     
    for(i = 0; i<5; i++)
    {
        numero[i]=parseInt(prompt("Digite o "+ i + " numero: "));
        console.log(" Numero " + numero[i] + " na posição " + i );
    }

        valor=parseInt(prompt("Digte um valor para multiplicar os numeros armazenados: "));
    
    for(i = 0; i<5; i++)
    {
        resultado[i] = numero[i] * valor
    }

    console.log("\n");

    console.log("Resultados:");
    for(i = 0; i<5; i++)
    {
            console.log("Resultado "+i+ "º numero informado: " +resultado[i] );
    }

    console.log("Programa finalizado!")
    
    return false;
}