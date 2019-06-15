



var firebaseConfig = {
    apiKey: "AIzaSyB9M40dFY8SrZGENR22Fe5ZEZ9I6quEne4",
    authDomain: "myapp1-78be2.firebaseapp.com",
    databaseURL: "https://myapp1-78be2.firebaseio.com",
    projectId: "myapp1-78be2",
    storageBucket: "myapp1-78be2.appspot.com",
    messagingSenderId: "524356125498",
    appId: "1:524356125498:web:88fbf4ad186eab6d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();



$("#add-line-btn").on("click", function (event) {
    event.preventDefault();

    console.log("submit");

    name = $("#line-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    first_run = $("#first-run-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    database.ref().push({
        name: name,
        dest: destination,
        first: first_run,
        freq: frequency
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

    $(".form-control").val("");

});

database.ref().on("child_added", function (snapshot) {

    var name = snapshot.val().name;
    var destination = snapshot.val().dest;
    var first_run = snapshot.val().first;
    var frequency = snapshot.val().freq;


    // var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

    // Calculate the months worked using hardcore math
    // To calculate the months worked
    // var empMonths = moment().diff(moment(empStart, "X"), "months");

    // Calculate the total billed rate
    // var empBilled = empMonths * empRate;

    var newRow = $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text("test"),
        $("<td>").text("test"),
    );
    // Append the new row to the table
    $("#train-table > tbody").append(newRow);

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


