function Pdetails(fname, lname, number, email, withinNai){
   this.fname = fname;
   this.lname = lname;
   this.number = number;
   this.email = email;
   this.withinNai = withinNai;
}

function displayDelivery() {
   $(".addressInput").show(1000);
   $(".noDelivery").hide(1000);
}

function hideDelivery() {
   $(".addressInput").hide(1000);
   $(".noDelivery").slideToggle(1000);
}

$(document).ready(function() {
   $("form.input").submit(function(event) {
      event.preventDefault();

      var firstName = $("form.fName").val();
      var lastName = $("form.lName").val();
      var phoneNumber = $("form.pNumber").val();
      var emailAddress = $("form.eAddress").val();
      var cityName = $("form.cName").val();
      var streetName = $("form.sName").val();
    
    var person = new  Pdetails (firstName, lastName, phoneNumber, emailAddress, cityName, streetName);

   Pdetails.prototype.fullName = function() {
      return this.firstName + " " + this.lastName;
   }
   Pdetails.prototype.contactDetails = function() {
      return this.phoneNumber + ", "  + this.emailAddress;
   }
   Pdetails.prototype.deliveryAddress = function() {
      return this.cityName + ", " + this.streetName;
   }

   $("#confirmDetailsBtn").last().click(function() {
         $(".show-details").slideToggle(500);
         $(".fullName").text(person.fullName);
         $(".contactInfo").text(person.contactDetails);
         $(".orderLocation").text(person.deliveryAddress);
      });
      
};