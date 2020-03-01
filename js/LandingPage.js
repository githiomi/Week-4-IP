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

      var firstName = $("form.fName").val();
      var lastName = $("form.lName").val();
      var phoneNumber = $("form.pNumber").val();
      var emailAddress = $("form.eAddress").val();
      var cityName = $("form.cName").val();
      var streetName = $("form.sName").val();

      console.log(firstName);
    
    var Person = new  Pdetails (firstName, lastName, phoneNumber, emailAddress, cityName, streetName);

   Pdetails.prototype.fullName = function() {
      return this.fname + " " + this.lname;
      
   }
   Pdetails.prototype.contactDetails = function() {
      return this.phoneNumber + ", "  + this.emailAddress;
   }
   Pdetails.prototype.deliveryAddress = function() {
      return this.cityName + ", " + this.streetName;
   }

         $(".show-details").show(1000);
         $(".fullName").text(Person.fullName);
         $(".contactInfo").text(Person.contactDetails);
         $(".orderLocation").text(Person.deliveryAddress);
      
};
