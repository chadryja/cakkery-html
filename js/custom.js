function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


// Function to initialize EmailJS
function initializeEmailJS() {
    emailjs.init({
        publicKey: "5kZTAgODTvn7A0lxW",
      });
}

// Function to send email using EmailJS
function sendEmail() {
    // Collect form data
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_go0ndgg", "template_bom3rpf", {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
    }).then(function(response) {
        console.log("Email sent successfully!", response);
        // Optionally, display a success message to the user
        alert("Your message has been sent successfully!");
    }, function(error) {
        console.error("Error sending email:", error);
        // Optionally, display an error message to the user
        alert("An error occurred while sending your message. Please try again later.");
    });

    // Prevent form from submitting
    return false;
}

initializeEmailJS();
