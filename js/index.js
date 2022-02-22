console.log("Your index.js file is loaded correctly!");

var helloWorld = "HelloWorld!";
console.log(helloWorld)

$(document).ready(function(){
    $(“li”).hover(function(){
        $(this).css(“font-size”, “30px”);
        }, function(){
        $(this).css(“font-size”, “20px”);
    });
