let score = 0;
let questionIndex = 0;

$(".card-body").on("click", function (event){
    event.preventDefault()
    console.log($(event.target)[0].attributes[1].nodeValue)
    score += parseInt(($(event.target)[0].attributes[1].nodeValue))
    console.log("score ", score)
    let curIdString = "#" + questionIndex
    let nextIdString = "#" + (questionIndex + 1)
    $(nextIdString).removeClass("d-none")
    $(curIdString).addClass("d-none")
    questionIndex++
    //if ++ is 10 then do route call to backend to figure out which was best match
    //return info that will render new handlebars page. personality?
})


//click start button, it will remove d-none from first div for question
//d-none is hide
$("#startBtn").on("click", function (event){
    event.preventDefault()
    let idString = "#" + questionIndex
    $(idString).removeClass("d-none")
    $("#startBtn").addClass("d-none")
})