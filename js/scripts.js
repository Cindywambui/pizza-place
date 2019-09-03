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
        var pizzaFlavor = $("input:radio[name=flavor]:checked").val();
        var pizzaSize = $("input:radio[name=size]:checked").val();
        var crust = $("input:radio[name=crust]:checked").val();
        if (pizzaFlavor == null) {
            alert("Please select your pizza flavor")
        } else if (pizzaSize == null) {
            alert("Please select your pizza size")
        } else if (crust == null) {
            alert("please select your crust")
        }
        
    })
});