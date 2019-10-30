'use strict'

// Add Event Listener
document.getElementById('submit').addEventListener('click', display);

// Function
function display () {
    //Inputs
    let verbEndingInIng = document.getElementById('verb1').value;
    let pluralNoun = document.getElementById('Noun1').value;
    let adjective = document.getElementById('Adj').value;
    let presentVerb = document.getElementById('Verb2').value;
    let noun = document.getElementById('Noun2').value;

    // Message
    let paragraph = '"There too many ' + verbEndingInIng + ' ' + pluralNoun + ' on this colorful airplane!", I screamed. "Somebody has to ' + presentVerb + ' on the ' + noun + ' to solve this problem!"';

    // Display
    let message = document.getElementById('output').innerHTML = paragraph;
    }