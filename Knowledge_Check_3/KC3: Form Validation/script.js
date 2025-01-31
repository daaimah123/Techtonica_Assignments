/*


Print a message inside the div with the error class whenever the user submits a blank form (JS)
Handle failure icon visibility (CSS). Hint: check the HTML for the error-classes
Handle the success icon visibility if a user completes all inputs and submits (CSS)
Ensure password must have more that 8 letters
Email can not be empty
Bonus
Change the success/failure icons according to successful input values or incorrect input values


Pseudocode:
Failure icon visible upon empty form submission using the error class, change icon to red
Success icon visible upon user input and submit, change icon to green

Handle user inputs on user input area id (username, password, email), then grab value

Check if user input is 8 letters long for the password, and handle with a failure icon if not 8 letters
Check that the email has more than zero length input, has an '@', required attribute, find regex to help meet this pattern => [letters/numbers/punctuation]@[letters].[letters]

How do we make success / failure icon invisible
Activate click on submit ID and conditionally do these things
  username => failure_icon ? empty : success_icon
  email => failure_icon ? zero length or not meeting the pattern : success_icon
  password => failure_icon ? is < 8 chars : success_icon

*/

// make success icons invisible
const successIcon 

// access the failure icon
const failureIcon 

// valid email
const correctEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/*
Activate click on submit ID and conditionally do these things
*/

document.getElementById('submit').addEventListener('click', 
      (event) => {
        event.preventDefault();

        const userNameError = document.getElementsByClassName('error')[0];
        const emailError = document.getElementsByClassName('error')[1];
        const passwordError = document.getElementsByClassName('error')[2];

        // change style of the messages
        userNameError.style.color = 'red'
        emailError.style.color = 'red'
        passwordError.style.color = 'red'

        // Handle user inputs on user input area id (username, password, email), then grab value
        const username 
        const email 
        const password 

        // Failure icon visible upon empty form submission using the error class, change icon to red
        // username => failure_icon ? empty : success_icon
        
        // email => failure_icon ? zero length or not meeting the pattern : success_icon
        
        // password => failure_icon ? is < 8 chars : success_icon
       

        // email is valid
       

        // password at least 8 characters
        
        
      }
)
