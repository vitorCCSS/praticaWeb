function validaProc()
{ 
    let nomes=[];
    let compras=[];
    let linhas=3;
    let colunas=3;
    let qtdCompras=[];
    let mediaCompras=[];
    let opcao;
    let nomeBusca;
    let clienteIndice;


    for(i = 0; i<3; i++)
    {
        nomes[i]=prompt("Qual seu nome?");
    }

    //Alimentar a matriz
    for(i = 0; i< linhas; i++)
    {
        compras[i]=[]
        for(c = 0; c < colunas; c++)
        {
            compras[i][c]= parseInt(prompt("Valor da compra do cliente "+ nomes[i] +" no mês "+ (c+1) +": "));
        }
    }

    for(i = 0; i< linhas; i++)
    {
        qtdCompras[i] = 0
        mediaCompras[i] = 0
        for(c = 0; c < colunas; c++)
        {
            if(compras[i][c] != 0)
            {
                qtdCompras[i] = qtdCompras[i] + 1
                mediaCompras[i] = mediaCompras[i] + compras[i][c]
            }
        }
        if(qtdCompras[i] !=0)
        {
            mediaCompras[i] = mediaCompras[i] / qtdCompras[i]
        }
    }

    do
    {
        console.log("<h3> --- Menu --- <h3>");
        console.log("<br>")
        console.log("<br> (1) Ver compras de um unico cliente ")
        console.log("<br> (2) Ver todas as compras dos clientes ")
        console.log("<br> (3) Sair ")
        opcao = parseInt(prompt("Escolha uma opção: "))

        switch(opcao)
        {
            case 1:
                nomeBusca= prompt("Informe o nome do cliente:");
                clienteIndice = -1

                for(i = 0; i<linhas; i++)
                {
                    if(nomes[i] == nomeBusca)
                    {
                        clienteIndice = i
                    }
                }

                if(clienteIndice != -1)
                {
                    console.log("Cliente: "+ nomes[clienteIndice]);
                    for(c = 0; c < colunas; c++)
                    {
                        console.log("<br> Mês "+ (c+1) + " R$ "+ compras[clienteIndice][c]);
                    }
                    console.log("<br> Quantidade de compras: "+ qtdCompras[clienteIndice][c]);
                    console.log("<br> Media: R$ "+ mediaCompras[clienteIndice]);
                }

                else
                {
                    alert("Cliente não encontrado! ");
                }
            break;

            case 2:
                for(i = 0; i<linhas; i++)
                {
                    console.log("<br> Cliente: "+ nomes[i]);
                    for(c = 0; c < colunas; c++)
                    {
                        console.log("<br> Mês "+ (c+1) + " R$ "+ compras[i][c]);
                    }
                    console.log("<br> Quantidade de compras: "+ qtdCompras[1][c]);
                    console.log("<br> Media: R$ "+ mediaCompras[i]);
                }
            break;

            case 3:
                console.log("Encerrando...")
            break;

            default:
                alert("Opção invalida");

        }


    }while(opcao != 0)






    
    
    
    
    
    
    return false;
}