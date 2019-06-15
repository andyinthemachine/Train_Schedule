



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


var name = "";
var destination = "";
var first_run = "";
var frequency = "";

$("#add-line-btn").on("click", function (event) {
    event.preventDefault();

    console.log("submit");

    name = $("#line-name-input").val().trim();
    desintation = $("#destination-input").val().trim();
    first_run = $("#first-run-input").val().trim();
    frequency = $("#frequency-input").val().trim();

    database.ref().push({
        name: name,
        dest: destination,
        first: first_run,
        freq: frequency
        // dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});
