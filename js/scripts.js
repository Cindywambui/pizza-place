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
    $("form#inputform").submit(function (event) {
        event.preventDefault();
        var pizzaflavor = $("input:radio[name=flavor]:checked").val();
        var pizzasize =$("input:radio[name=size]:checked").val();
        var crust = $("input:radio[name=crust]:checked").val();
    })
});