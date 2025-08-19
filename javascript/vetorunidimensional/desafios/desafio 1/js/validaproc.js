function validaProc()
{ 
    let i;
    let nota1=[];
    let nota2=[];
    let media=[];
    
    for(i = 0; i<5; i++)
    {
        nota1[i]=parseFloat(prompt("Digite a primeira nota do aluno: " ));
        nota2[i]=parseFloat(prompt("Digite a segunda nota do aluno: " ));

        media[i] = (nota1[i] + nota2[i]) / 2
    }

    console.log("\n")

    for(i = 0; i<5; i++)
    {
        console.log("Media do "+i+ " aluno = "+media[i])
    }
    
    return false;
}