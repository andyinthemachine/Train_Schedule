



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

    name = $("#line-name-input").val().trim();
    destination = $("#destination-input").val().trim();
    first_run = $("#first-run-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    var new_line = {
        name: name,
        dest: destination,
        first: first_run,
        freq: frequency
    }
    database.ref().push(new_line);
    $(".form-control").val("");
});


database.ref().on("child_added", function (snapshot) {

    var name = snapshot.val().name;
    var destination = snapshot.val().dest;
    var first_run = snapshot.val().first;
    var frequency = parseInt(snapshot.val().freq);

    var first_run_backed_up = moment(first_run, "HH:mm").subtract(1, "years");
    var current_time = moment();
    var elapsed = moment().diff(moment(first_run_backed_up), "minutes");

    remainder = current_time - first_run;

    var remainder = elapsed % frequency;

    var minutes_away = frequency - remainder;

    var next_train = moment().add(minutes_away, "minutes").format('LT');

    var newRow = $("<tr>").append(
        $("<td>").text(name),
        $("<td>").text(destination),
        $("<td>").text(frequency),
        $("<td>").text(next_train),
        $("<td>").text(minutes_away),
    );
    $("#train-table > tbody").append(newRow);

}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


