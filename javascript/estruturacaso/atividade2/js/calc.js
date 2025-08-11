function procFormulario() {
    var n1 = document.getElementById("num1").value;
    var op = document.getElementById("opera").value;
    var n2 = document.getElementById("num2").value;

    if (n1 == "") 
    {
        alert("Digite o primeiro numero:");
        document.getElementById("num1").focus();
        return false;
    }

    if (op == "") 
    {
        alert("Qual a operação? (+) (-) (*) (/)");
        document.getElementById("opera").focus();
        return false;
    }

    if (n2 == "") 
    {
        alert("Digite o segundo numero:");
        document.getElementById("num2").focus();
        return false;
    }

    n1 = parseFloat(n1);
    n2 = parseFloat(n2);
    var res;

    switch(op) 
    {
        case "+":
            res = n1 + n2;
        break;

        case "-":
            res = n1 - n2;
        break;

        case "*":
            res = n1 * n2;
        break;

        case "/":
            if (n2 == 0) 
            {
                alert("Não pode dividir por zero!");
                return false;
            }
            res = n1 / n2;
        break;

        default:
            alert("Operação inválida!");
            return false;
    }
    
    var paridade;

    if (res % 2 == 0) 
    {
        paridade = "Par";
    } 

    else
    {
        paridade = "Ímpar";
    }

    alert("Resultado: " + res + "\nEste número é " + paridade + ".");
 
    return false;
}

function limparFormulario() 
{
    document.getElementById("num1").value = "";
    document.getElementById("opera").value = "";
    document.getElementById("num2").value = "";
}