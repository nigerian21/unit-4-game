




var number = Math.floor(Math.random() * 200) + 100;
console.log(number);
var lost = 0;
var won = 0;
var firstcrystal = Math.floor(Math.random() * 19) + 1;
var secondcrystal = Math.floor(Math.random() * 19) + 1;
var thirdcrystal = Math.floor(Math.random() * 19) + 1;
var fourthcrystal = Math.floor(Math.random() * 19) + 1;
console.log(firstcrystal)

$(".wins").text(won);
$(".loss").text(lost);
$(".number").append(number);

//if the guessed number and the numbers added up by the crystals equal each other then an alert will pop up saying you won and refresh the page 
if (firstcrystal === number) {
    alert("you won get ready for round 2")
    window.location.reload()
};

if (secondcrystal === number) {
    alert("you won get ready for round 2")
    window.location.reload()
};

if (thirdcrystal === number) {
    alert("you won get ready for round 2")
    window.location.reload()
};

if (fourthcrystal === number) {
    alert("you won get ready for next round")
    window.location.reload()
};
$(".c1").on("click", function () {
    firstcrystal++;
    $(".yournum").html(firstcrystal);


});

$(".c2").on("click", function () {
    secondcrystal++;
    $(".yournum").html(secondcrystal);


});

$(".c3").on("click", function () {
    thirdcrystal++;
    $(".yournum").html(thirdcrystal);


});

$(".c4").on("click", function () {
    fourthcrystal++;
    $(".yournum").html(fourthcrystal);


});

//tried assisgning numbers to each crystal  and appending it to the yournum div so they add up from previous number when you click it






