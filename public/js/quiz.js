let score = 0;
let questionIndex = 0;

$(".card-body").on("click", function (event) {
  event.preventDefault();
  console.log($(event.target)[0].attributes[1].nodeValue);
  score += parseInt($(event.target)[0].attributes[1].nodeValue);
  console.log("score ", score);
  let curIdString = "#" + questionIndex;
  let nextIdString = "#" + (questionIndex + 1);
  $(nextIdString).removeClass("d-none");
  $(curIdString).addClass("d-none");
  questionIndex++;
  //if ++ is 10 then do route call to backend to figure out which was best match
  //if points are from 10-17, personality is ADVENTURER
  //else if points are from 18-25, HOMEBODY
  //else if points are from 26-33, SPICY
  //else if points are from 34-40, SWEET
  //if questionIndex = 10, call function (determine when we're on last question)
});

//create new function with score. will determine what their personality is
//generates personality for user
function genPers() {
  switch (score) {
    case 10 - 17:
      personality = "Adventurer";
      break;
    case 18 - 25:
      personality = "Homebody";
      break;
    case 26 - 33:
      personality = "Sweet";
      break;
    case 34 - 40:
      personality = "Spicy";
      break;
      default:
  }
}
//switch will generate
//return info that will render new handlebars page. personality?

//click start button, it will remove d-none from first div for question
//d-none is hide
$("#startBtn").on("click", function (event) {
  event.preventDefault();
  let idString = "#" + questionIndex;
  $(idString).removeClass("d-none");
  $("#startBtn").addClass("d-none");
});
