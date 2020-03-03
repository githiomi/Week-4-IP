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

         var size = "";
         var allCrusts = [];
         var allToppings = [];

function sizeOrder1() {
   $(".pizzasizes").show(500);

   size = parseInt($("#small").val());

   $(".sizesView").text("Small (Ksh " + size + ")");
}
function sizeOrder2() {
   $(".pizzasizes").show(500);

   size = parseInt($("#medium").val());

   $(".sizesView").text("Medium (Ksh " + size + ")");
}
function sizeOrder3() {
   $(".pizzasizes").show(500);

   size =parseInt( $("#large").val());

   $(".sizesView").text("Large (Ksh " + size + ")");
}


function crustOrder1() {
   $(".pizzacrusts").show(500);

   var crusts = parseInt($("#crispy").val());
   allCrusts.push(crusts);

   $(".crustsView").append("Crispy Crust (Ksh " + crusts + ")<br>");
}
function crustOrder2() {
   $(".pizzacrusts").show(500);

   var crusts = parseInt($("#stuffed").val());
   allCrusts.push(crusts);

   $(".crustsView").append("Stufed Crust (Ksh " + crusts + ")<br>");
}
function crustOrder3() {
   $(".pizzacrusts").show(500);

   var crusts = parseInt($("#gluttenfree").val());
   allCrusts.push(crusts);

   $(".crustsView").append("Glutten Free (Ksh " + crusts + ")<br>");
}



function toppingsOrder1() {

   $(".pizzatoppings").show(500);

   var toppings = parseInt($("#tomatoes").val());
   allToppings.push(toppings);

   $(".toppingsView").append("Tomatoes (Ksh "+  toppings + ")<br>");
}
function toppingsOrder2() {
   $(".pizzatoppings").show(500);

   var toppings = parseInt($("#cheese").val());
   allToppings.push(toppings);

   $(".toppingsView").append("Cheese (Ksh "+  toppings + ")<br>");
}
function toppingsOrder3() {
   $(".pizzatoppings").show(500);

   var toppings = parseInt($("#pineapples").val());
   allToppings.push(toppings);

   $(".toppingsView").append("Pineapples (Ksh "+  toppings + ")<br>");
}
function toppingsOrder4() {
   $(".pizzatoppings").show(500);

   var toppings = parseInt($("#greenPepper").val());
   allToppings.push(toppings);

   $(".toppingsView").append("Green Pepper (Ksh "+  toppings + ")<br>");
}
function toppingsOrder5() {
   $(".pizzatoppings").show(500);

   var toppings = parseInt($("#pepperoni").val());
   allToppings.push(toppings);

   $(".toppingsView").append("Pepperoni (Ksh "+  toppings + ")<br>");
}
function toppingsOrder6() {
   $(".pizzatoppings").show(500);

   var toppings = parseInt($("#mushrooms").val());
   allToppings.push(toppings);

   $(".toppingsView").append("Mushrooms (Ksh "+  toppings + ")<br>");
}

function crustsTotal() {
   crustTotal = 0;

   for (var x = 0; x < allCrusts.length; x++){
      return crustsTotal + allCrusts [x];
   }
   cTotal = crustsTotal();
}

function toppingsTotal() {
   toppingTotal = 0;

   for (var y = 0; y < allCrusts.length; y++){
      return toppingTotal + allToppings [y];
   }
   tTotal = toppingsTotal();
}

var totalP = 0;

function addPizza() {
   var quantity = parseInt($("#orders").val())
   console.log(quantity);
   console.log(size);
   console.log(allCrusts);
   console.log(allToppings);

   var  cTotal = 0;
   for (var x = 0; x < allCrusts.length; x++){
      cTotal =  cTotal + allCrusts[x];
   }

   var tTotal = 0;
   for (var y = 0; y < allCrusts.length; y++){
      tTotal = tTotal + allToppings [y];
   }

   totalP = (quantity * (size + cTotal + tTotal));

   $("#total").text("Total Amount is: Ksh " +  totalP + ".");
}

function finalShowy() {
      $(".finalShow").show(500);

      $(".orderLocation").text("The order will be delivered.");
      $("#totalP").text("The total to be paid by cash is: " +totalP);
}
 function finalShown() {
      $(".finalShow").show(500);

      $(".orderLocation").text("The order is scheduled for pickup!");
      $("#totalP").text("The total to be paid by cash is: " +totalP);
}
