$(document).ready(function() {

    $('form[id="booking"]').validate({
        rules: {
            name: 'required',
            phone: {
                required: true,
                phone:true
            },
            date: 'required',
            time: 'required',
            cc: {
                required: true,
                creditcard: true
            }  
        },
    
        messages: {
            name: 'Please enter a name',
            phone: {
                required:'Please enter a phone'
            },
            date: 'Please enter a date',
            time: 'Please enter a time',
            cc: {
                required:'Please enter a credit card',
            }
        },
    
        submitHandler: function (form) {
            form.submit();
            alert("Your Appointment is Booked !");
        }
    });

    
    jQuery.validator.addMethod("phone", function (phone_number, element) {
        phone_number = phone_number.replace(/\s+/g, "");
        return this.optional(element) || phone_number.length > 9 &&
              phone_number.match(/^\(?[\d\s]{3}-[\d\s]{3}-[\d\s]{4}$/);
    }, "Invalid phone number");

  });
