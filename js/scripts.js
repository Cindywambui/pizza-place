$(document).ready(function () {
    $("#orderanddeliver").click(function () {
        $("#orderingterms").show();   
    })
    $("#pizzas").mouseenter(function () {
        $("#pizzascontent").fadeIn();
    }).mouseleave(function () {
        $("#pizzascontent").fadeOut();
    })
    $("#crustsandtoppings").mouseenter(function () {
        $("#crustsandtoppingscontent").fadeIn();
    }).mouseleave(function () {
        $("#crustsandtoppingscontent").fadeOut();
    })
});