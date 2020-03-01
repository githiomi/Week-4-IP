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

function sizeOrder(){
   var sSize = parseInt($(".pizzaSize").val());
   var size =  $("#medium").val();
   var size = $("#large").val();
   
   console.log(sSize);

   // var smallSize = new Order(pizzaSize);
   
   // $("ul.ordersView").text("Size: Small Pizza. (Ksh.400/=)" + smallSize.pizzaSize);
}