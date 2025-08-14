function validaProc()
{ 
    let peso
    let altura
    
    do
    {
        peso = parseInt(prompt("Qual seu peso?"));
        altura = parseInt(prompt("Qual sua altura?"));
        console.log("peso: "+ peso + " kg" );
        console.log("altura: "+altura + " cm" );
        calculo = peso / (altura * altura);

        console.log("Seu IMC é: "+ calculo);

        continuar = parseInt(prompt("Deseja realizar o calculo novamente?  ( 1 - SIM ) e (qualquer numero para encerrar) "));

    }while(continuar == 1)
    
    console.log("Obrigado por utilizar o nosso programa!");
    return false;
}