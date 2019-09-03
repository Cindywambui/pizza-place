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
    $("#delivering").click(function () {
        $(".deliveryterms").show()
    })
    $("form#inputform").submit(function (event) {
        event.preventDefault();
        var pizzaFlavor = $("input:radio[name=flavor]:checked").val();
        var pizzaSize = $("input:radio[name=size]:checked").val();
        var crust = $("input:radio[name=crust]:checked").val();
        var pizzaNumber = $(".pizzanumber").val();
        var delivery = $("input:radio[name=delivery]:checked").val();
        if (pizzaFlavor == null) {
            alert("Please select your pizza flavor")
        } else if (pizzaSize == null) {
            alert("Please select your pizza size")
        } else if (crust == null) {
            alert("please select your crust")
        } else if (pizzaNumber == null) {
            alert("Please input your pizza number")
        } else if (delivery == null) {
            alert("Please select your delivery option")
        }
    })
});