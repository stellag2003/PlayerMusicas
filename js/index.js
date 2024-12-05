$("#btnCalcular").on("click",function()
{
  $(".txtRes").val(Calcular());
  let funcao = $("input[type=radio][name=rbFuncao]:checked").attr("id")
  let N1 = parseFloat($(".txtN1").val())
  if (funcao == "rbPotencia")
  {
    $(".txtFuncao").val(Math.pow(N1,2))
  }

  else
  {
    $(".txtFuncao").val(Math.sqrt(N1))
  }
});

function Calcular(){

  let N1 = parseFloat($(".txtN1").val())
  let N2 = parseFloat($(".txtN2").val())


  switch ($(".cbOperacao").val())
  {
    case "+":

      return N1 + N2;

    case "-":

      return N1 - N2;

    case "x":

        return N1 * N2;

      case "/":

        return N1 / N2;


    default:

  }
}
