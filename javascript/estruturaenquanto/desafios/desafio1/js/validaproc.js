function validaProc()
{ 
    let contador=1;
    let soma = 0;
    let resposta = 0
    
    while(contador<=2) //while = enquanto / do while = faça enquanto
    {  
        numero = parseInt(prompt("Digite um numero:"));
        console.log("O numero informado é:"+ numero );
        soma+= numero;
        contador++
    }

    do
    {
        resposta = parseInt(prompt("Qual o resultado da soma?"));

        if(resposta != soma)
        {
            console.log("Resposta incorreta, tente novamente");
        }
    }while(resposta != soma)

    console.log("Parabens, você acertou!")
    return false;

}