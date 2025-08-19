function validaProc()
{ 
    let i;
    let num=[];
    let numerosImpares=[];
    

    for(i = 0; i<10; i++)
    {
        num[i]=parseFloat(prompt("Digite o " +i+ " numero: " ));
        console.log("numero "+num[i]+ " na posição " +i);   
    }
    console.log("\n")
    for(i = 0; i<10; i++)
    {
        if(i % 2 != 0)
        {
            console.log("Numero "+num[i] +" na posição " + i);
        }
        
    }
    return false;
}