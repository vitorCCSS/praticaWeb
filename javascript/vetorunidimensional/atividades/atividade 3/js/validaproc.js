function validaProc()
{ 
    let i;
    let num=[];
    let numDobro=[];
    
    
    for(i = 0; i<10; i++)
    {
        num[i]=parseFloat(prompt("Digite o " +i+ " numero: " ));
        console.log("numero "+num[i]+ " na posição " +i);
        numDobro[i] = num[i] * 2   
    }

    for(i = 0; i<10; i++)
    {
        console.log("Matriz dobrada " + numDobro[i]);
        
    }
    return false;
}