
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
        var pizzaNumber = parseInt($("input#pizzanumber").val());
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

        if (pizzaSize == "small") {
            var costSize = 4.50
        } else if (pizzaSize == "medium") {
            var costSize = 7.50
        } else if (pizzaSize == "large") {
            var costSize = 10.50
        } else if (pizzaSize == "mega") {
            var costSize = 13.50
        }
        if (crust == "Crispy") {
            var crustPrice = 0.50
        } else if (crust == "Stuffed") {
            var crustPrice = 1.00
        } else if (crust == "Gluttenfree") {
            var crustPrice = 1.50
        }
        var totalCost = (costSize + crustPrice)
        if (pizzaNumber == 1) {
            alert("The total cost for your order is:" + "" + totalCost + "" + "$");
            $("button#deliverycost").click(function () {
                var deliveryCost = 25.00
                var newTotalCost = (costSize + crustPrice + deliveryCost)
                alert("Your total cost is" + "" + newTotalCost + "$");
            })
        } else {
            var completeCost = totalCost * pizzaNumber
            alert("The total cost for your order is:" + "" + completeCost + "$");

        }
    })
});
