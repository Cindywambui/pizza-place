$(document).ready(function () {
    $("#orderanddeliver").mouseenter(function () {
        $("#orderingterms").fadeIn();
    }).mouseleave(function () {
        $("#orderingterms").fadeOut();
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