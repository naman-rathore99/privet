    function sendMail() {
        var params = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            message: document.getElementById("message").value
        };
       const serviceID = "service_urnfslc"
            const templateID = "template_m32p6qx"


        emailjs.send(serviceID, templateID, params)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                alert("Message sent successfully!");
            }, function(error) {
                console.log("FAILED...", error);
                alert("Message sending failed.");
            });
    }