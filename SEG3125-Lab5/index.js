function validateName() {
    var name = document.getElementById(name).value;

    if (name == null || name == "") {
        alert("Name can't be blank");
        return false;
    } 

    return true;
}

function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    var filter = /^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


function validateCard(txtCard) {
    var a = document.getElementById(txtCard).value;

    var filter = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/g
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}
         

// JQuery starts here

$(document).ready(function () {

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    
    $("#name").on("change", function () {
        if (validateName()) {
            alert("Name can't be blank");
            $("#name");
            $("#name").addClass("error");
        }
        else {
            $("#name").removeClass("error");
        }
    });
    
    
    
    
    $("#phone").on("change", function () {
        if (!validatePhone("phone")) {
            alert("Wrong format for phone");
            $("#phone");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    $("#cc").on("change", function () {
        if (!validatePhone("cc")) {
            alert("Wrong format for Credit Card");
            $("#cc");
            $("#cc").addClass("error");
        }
        else {
            $("#cc").removeClass("error");
        }
    });

    //inspired by https://www.tutorialrepublic.com/codelab.php?topic=faq&file=bootstrap-show-popover-on-hover
    $('[data-toggle="popover"]').popover({
        placement: 'right',
        trigger: 'hover mouseover'
    });

    $("#booked").on("click", function () {
        let name = document.getElementById("name").value;
        let dateBook = document.getElementById("date").value;
        let timeBook = document.getElementById("time").value;
        let phone = document.getElementById("phone").value;
        let cc = document.getElementById("cc").value;
        if ((name != "") && (dateBook != "") && (timeBook != "") && (phone != "") && (cc != "")) {
            alert("Your Appointment has been booked!");
        } else {
            alert("Please Ensure all Fields are filled before booking.");
        }

    });


});