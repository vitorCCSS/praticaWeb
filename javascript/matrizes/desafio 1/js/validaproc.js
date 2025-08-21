function validaProc()
{ 
    let renda=[];
    let linhas=6;
    let colunas=4;
    let rendaTotal = 0;
    let mediaRenda;
     
    for(i = 0; i< linhas; i++)
    {
        renda[i]=[]
        for(c = 0; c < colunas; c++)
        {
            renda[i][c]= parseInt(prompt("Renda do "+ (i+1) +"º apartamento do "+ (c+1) + "º andar"));
            console.log("Renda do "+ (i+1) +"º apartamento do "+ (c+1) + "º andar: R$ "+ renda[i][c])
            rendaTotal = rendaTotal + renda[i][c]
        }
    }

    mediaRenda = rendaTotal / (6*4)

    document.write("Renda Media: R$ "+mediaRenda);
    document.write("<br>");
    document.write("Renda total: R$ "+ rendaTotal);
   
    return false;
}