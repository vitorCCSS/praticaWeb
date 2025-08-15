function validaProc()
{ 
    let i;
    let num=[];
    let notasMaiores =[];
    let qtdNotasMaiores=0;
    
    for(i = 0; i<3; i++)
    {
        num[i]=parseFloat(prompt("Digite a nota do " +i+ " aluno: " ));
        console.log("nota "+num[i]+ " na posição " +i);

        if(num[i] >= 7.5)
        {
            qtdNotasMaiores++
            notasMaiores[i] = num[i]
        }
    }

    for(i = 0; i<3; i++)
    {
        if(notasMaiores[i] !== undefined)
        {
            console.log("as notas maiores que 7.5 são " + notasMaiores[i]);
        }
    }
    console.log("Quantidade de notas superiores ou iguais a 7,5: "+qtdNotasMaiores);

    return false;
}