function validaProc()
{ 
    let contador=+1;
    let qtdGrupo;
    let idade;
    let qtdPessoas;
    let genero;
    let salario;
    let somaIdade=0;
    let mediaIdade;
    let qtdMasculino = 0;
    let salarioMasc = 0;
    let qtdFem = 0;
    let salarioFem = 0;
    let mediaSalarioFem;
    let somaSalarioTotal=0;
    let mediaSalarioTotal; 

    qtdGrupo = parseInt(prompt("Quantas pessoas tem no grupo?"));
    console.log("Quantidade de pessoas no grupo: "+qtdGrupo);
    
    while(contador<=qtdGrupo)
    {
        idade = parseInt(prompt("Qual sua idade? "));
        if(idade <=0)
        {
            console.log("Idade não pode ser 0 ou negativa, tente novamente");
        }

        else
        {
            qtdPessoas++
            somaIdade = somaIdade + idade
            mediaIdade = somaIdade / qtdPessoas

            genero = parseInt(prompt("Qual seu genero? (1) Masc (2) Fem"));
            salario = parseInt(prompt("Qual seu salario? R$"));

            switch (genero)
            {
                case 1:
                    qtdMasculino++
                    salarioMasc = salarioMasc + salario 
                    mediaSalarioMasc = salarioMasc / qtdMasculino
                break;

                case 2:
                    qtdFem++
                    salarioFem = salarioFem+ salario
                    mediaSalarioFem = salarioFem / qtdFem
                break;
            }
            somaSalarioTotal = somaSalarioTotal + salario
            mediaSalarioTotal = somaSalarioTotal / qtdGrupo
        }
        contador++
    }
    
    console.log("Media salarial do grupo: R$ "+mediaSalarioTotal);
    console.log("Media das idades: "+ mediaIdade);
    console.log("Media salario feminino: R$ "+mediaSalarioFem);
    console.log("Media salario masculino: R$ "+mediaSalarioMasc);
    return false;
}