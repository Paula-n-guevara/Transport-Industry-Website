document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var destination = document.getElementById('destination').value;

    alert("Thank you " + name + ", your limo to " + destination + " is on its way!");
});
