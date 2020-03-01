function Pdetails(fname, lname, number, email, cname,sname){
   this.fname = fname;
   this.lname = lname;
   this.number = number;
   this.email = email;
   this.cname = cname;
   this.sname = sname;
}

function displayDelivery() {
   $(".addressInput").show(1000);
   $(".noDelivery").hide(1000);
}

function hideDelivery() {
   $(".addressInput").hide(1000);
   $(".noDelivery").slideToggle(1000);
}

function confirmDetails(){

      var firstName = $("#fName").val();
      var lastName = $("#lName").val();
      var phoneNumber = $("#pNumber").val();
      var emailAddress = $("#eAddress").val();
      var cityName = $("#cName").val();
      var streetName = $("#sName").val();

      console.log(phoneNumber);

    var Person = new  Pdetails (firstName, lastName, phoneNumber, emailAddress, cityName, streetName);

   Pdetails.prototype.fullName = function() {
      return Person.fname + " " + Person.lname; 
   }
   Pdetails.prototype.contactDetails = function() {
      return Person.number + ", "  + Person.email;
   }
   Pdetails.prototype.deliveryAddress = function() {
      return Person.cname + ", " + Person.sname;
   }

         $(".show-details").show(1000);
         $(".fullName").text(Person.fullName);
         $(".contactInfo").text(Person.contactDetails);
         $(".orderLocation").text(Person.deliveryAddress);
      
};
