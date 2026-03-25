(function() {
    // აქ ჩასვი შენი Public Key (Account-ში რომ არის)
    emailjs.init("z7Rbd60fFzIzLwfFx"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // ეს აგზავნის მონაცემებს EmailJS-ში
    emailjs.sendForm('service_1nq3807', 'template_dt0l18t', this)
        .then(function() {
            alert('წარმატებით გაიგზავნა!');
        }, function(error) {
            alert('შეცდომა: ' + JSON.stringify(error));
        });
});