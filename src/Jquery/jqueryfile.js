$(document).ready(function() {
    //Basic
    
    $("span#mydiv").click(function() {
        alert("Hello, world!");
    });


    // Selectors
    $("p").css("background-color", "yellow");

    

    // Attribute
    var title = $("em").attr("title");
    $("#divid").text(title);

    $("#myimg").attr("src", "./images/jquery.jpg");

    //DOM Traversinm
    $("li").eq(2).addClass("selected");

    //Filtering out Elements
    $("li").filter(".middle").addClass("selected");

    //Locating Descendant Elements
    $("p").find("span").addClass("selected");


    //CSS Selectors Methods
    $("li").eq(5).css("color", "red");

    //Apply Multiple CSS Properties
    $("li").eq(4).css({"color":"red", "background-color":"green"});


    //Setting Element Width & Height 
    $("div:first").width(100);
    $("div:first").css({"color":"white", "background-color":"blue"});
 });