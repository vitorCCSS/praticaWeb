function validaProc()
{ 
    let i=1;
    let soma = 0;
    
    while(i<=3) //while = enquanto / do while = faça enquanto
    {  
        numero = parseInt(prompt("Digite um numero inteiro positivo:"));
        console.log("O numero informado é:"+ numero );
        
        if (numero > 0 && numero % 5 == 0)
        {
            soma += numero;
        } 
        else if(numero <= 0)
        {
            alert("O numero informado não pode ser 0 ou negativo");
        }
        i++
    }
    console.log("A somatoria dos numeros que são divisiveis por 5 é "+soma);
    return false;

}