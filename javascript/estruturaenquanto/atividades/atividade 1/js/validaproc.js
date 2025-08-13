function validaProc()
{ 
    let i=1;
    let soma = 0;
    while(i<=3) //while = enquanto / do while = faça enquanto
    {  
        numero = parseInt(prompt("Digite um numero:"));
        console.log("O numero informado é:"+ numero );
        soma = soma + numero;
        i++;
    }
    console.log("A somatoria dos numeros é "+soma);
    return false;

}