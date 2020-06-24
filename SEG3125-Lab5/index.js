$(document).ready(function() {

    $('form[id="booking"]').validate({
        rules: {
            name: 'required',
            phone: {
                required: true,
                minlength: 10
            },
            date: 'required',
            time: 'required',
            cc: {
                required: true,
                minlength: 16,
            }  
        },
    
        messages: {
            name: 'Please enter a name',
            phone: {
                required:'Please enter a phone',
                minlength: 'Phone number must be at least 10 characters long'
            },
            date: 'Please enter a date',
            date: 'Please enter a time',
            cc: {
                required:'Please enter a credit card',
                minlength: 'Credit card must be at least 16 characters long'
            }
        },
    
        submitHandler: function (form) {
            form.submit();
            alert("Your Appointment is Booked !");
        }
    });

  });
