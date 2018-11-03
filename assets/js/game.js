




var number = Math.floor(Math.random() * 200) + 100;
console.log(number);
var lost = 0;
var won = 0;
var d = 3;
var i = 1;
var a = 20;
var m = 55;
1
$(".wins").text(won);
$(".loss").text(lost);
$(".number").append(number);
$("#inner").append("<p>Test</p>");
//if the guessed number and the numbers added up by the crystals equal each other then an alert will pop up saying you won and refresh the page 
if (yournumber === number) {
    alert("you won get ready for round 2")
    window.location.reload()
};
$(".c1").on("click", function () {
    d++;
    $(".yournum").html(d);


});

$(".c2").on("click", function () {
    i++;
    $(".yournum").html(i);


});

$(".c3").on("click", function () {
    a++;
    $(".yournum").html(a);


});

$(".c4").on("click", function () {
    m++;
    $(".yournum").html(m);


});






