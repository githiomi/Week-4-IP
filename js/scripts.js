function Order () {
   this.total = [];
   this.cost = 0;
 }

function Order (pizzaSize, pizzaCrust, pizzaToppings){
   this.pizzaSize = pizzaSize;
   this.pizzaCrust = pizzaCrust;
   this.pizzaToppings = pizzaToppings;
}

function sizeShow() {
   $(".sizec").slideToggle(1500);
}

function crustShow() {
   $(".crustc").slideToggle(1500);
}

function toppingsShow() {
   $(".toppingsc").slideToggle(1500);
}

function sizeOrder1() {
   $(".pizzasizes").show(500);

   var size = $("#small").val();

   $(".sizesView").text(size);
}
function sizeOrder2() {
   $(".pizzasizes").show(500);

   var size = $("#medium").val();

   $(".sizesView").text(size);
}
function sizeOrder3() {
   $(".pizzasizes").show(500);

   var size = $("#large").val();

   $(".sizesView").text(size);
}

function crustOrder1() {
   $(".pizzacrusts").show(500);

   var crusts = $("#crispy").val();

   $(".crustsView").append(crusts+ "<br>");
}
function crustOrder2() {
   $(".pizzacrusts").show(500);

   var crusts = $("#stuffed").val();

   $(".crustsView").append(crusts+ "<br>");
}
function crustOrder3() {
   $(".pizzacrusts").show(500);

   var crusts = $("#gluttenfree").val();

   $(".crustsView").append(crusts+ "<br>");
}


function toppingsOrder1() {
   $(".pizzatoppings").show(500);

   var toppings = $("#tomatoes").val();

   $(".toppingsView").append(toppings+ "<br>");
}
function toppingsOrder2() {
   $(".pizzatoppings").show(500);

   var toppings = $("#cheese").val();

   $(".toppingsView").append(toppings+ "<br>");
}
function toppingsOrder3() {
   $(".pizzatoppings").show(500);

   var toppings = $("#pineapples").val();

   $(".toppingsView").append(toppings+ "<br>");
}
function toppingsOrder4() {
   $(".pizzatoppings").show(500);

   var toppings = $("#greenPepper").val();

   $(".toppingsView").append(toppings+ "<br>");
}
function toppingsOrder5() {
   $(".pizzatoppings").show(500);

   var toppings = $("#pepperoni").val();

   $(".toppingsView").append(toppings+ "<br>");
}
function toppingsOrder6() {
   $(".pizzatoppings").show(500);

   var toppings = $("#mushrooms").val();

   $(".toppingsView").append(toppings+ "<br>");
}