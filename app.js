$("#background").click(() => { 
  $("body").toggleClass("change-background") 
})

$("#border").click(() => {
  $(".card").toggleClass("card-border");
})

$("#size").click(() => {
  $(".card-paragraph").toggleClass("card-paragraph-text");
})

$("#calculate").click(() => {
  const firstOperand = parseInt($("#first-operand").val());
  const secondOperand = parseInt($("#second-operand").val());
  const operatorString = $("#operation").val();
  let total;
  switch (operatorString) {
    case "plus":
        total = firstOperand + secondOperand;
        break;
    case "minus":
        total = firstOperand - secondOperand;
        break;
    case "times":
        total = firstOperand * secondOperand;
        break;
    case "divided by":
        total = firstOperand / secondOperand;
  }
  $("#result").val(total);
})



