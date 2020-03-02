function Orderprice () {
   this.total = [];
   this.cost = 0;
 }

function Singleorder (pizzaSize, pizzaCrust, pizzaToppings){
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

$(document).ready(function() {
        event.preventDefault();

         allCrusts = [];
         allToppings = [];

function sizeOrder1() {
   $(".pizzasizes").show(500);

   var size = parseInt($("#small").val());

   $(".sizesView").text("Small (Ksh " + size + ")");
}
function sizeOrder2() {
   $(".pizzasizes").show(500);

   var size = parseInt($("#medium").val());

   $(".sizesView").text("Medium (Ksh " + size + ")");
}
function sizeOrder3() {
   $(".pizzasizes").show(500);

   var size =parseInt( $("#large").val());

   $(".sizesView").text("Large (Ksh " + size + ")");
}


function crustOrder1() {
   $(".pizzacrusts").show(500);

   var crusts = parseInt($("#crispy").val());

   $(".crustsView").append("Crispy Crust (Ksh " + crusts + ")<br>");
}
function crustOrder2() {
   $(".pizzacrusts").show(500);

   var crusts = parseInt($("#stuffed").val());

   $(".crustsView").append("Stufed Crust (Ksh " + crusts + ")<br>");
}
function crustOrder3() {
   $(".pizzacrusts").show(500);

   var crusts = parseInt($("#gluttenfree").val());

   $(".crustsView").append("Glutten Free (Ksh " + crusts + ")<br>");
}


function toppingsOrder1() {

   $(".pizzatoppings").show(500);

   var toppings = $("#tomatoes").val();
   allToppings.push(toppings);

   $(".toppingsView").append("Tomatoes (Ksh "+  toppings + ")<br>");
}
function toppingsOrder2() {
   $(".pizzatoppings").show(500);

   var toppings = $("#cheese").val();
   allToppings.push(toppings);

   $(".toppingsView").append("Cheese (Ksh "+  toppings + ")<br>");
}
function toppingsOrder3() {
   $(".pizzatoppings").show(500);

   var toppings = $("#pineapples").val();
   allToppings.push(toppings);

   $(".toppingsView").append("Pineapples (Ksh "+  toppings + ")<br>");
}
function toppingsOrder4() {
   $(".pizzatoppings").show(500);

   var toppings = $("#greenPepper").val();
   allToppings.push(toppings);

   $(".toppingsView").append("Green Pepper (Ksh "+  toppings + ")<br>");
}
function toppingsOrder5() {
   $(".pizzatoppings").show(500);
   allToppings.push(toppings);

   var toppings = $("#pepperoni").val();

   $(".toppingsView").append("Pepperoni (Ksh "+  toppings + ")<br>");
}
function toppingsOrder6() {
   $(".pizzatoppings").show(500);

   var toppings = $("#mushrooms").val();
   allToppings.push(toppings);

   $(".toppingsView").append("Mushrooms (Ksh "+  toppings + ")<br>");
}

function addAnother() {
   var pizzas = parseInt($("#orders").val()); 

   
}