function validaProc()
{ 
    let i;
    let num=[];
    let notasMaiores =[];
    
    for(i = 0; i<3; i++)
    {
        num[i]=parseInt(prompt("Digite a nota do " +i+ " aluno: " ));
        console.log("nota "+num[i]+ " na posição " +i);

        if(num[i] >= 7.5)
        {
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

    return false;
}